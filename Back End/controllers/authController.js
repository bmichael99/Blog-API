const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
const utils = require("../lib/utils");
require('dotenv').config()

exports.registerUserPost = async (req,res, next) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.createUser(req.body.first_name, req.body.username,hashedPassword);
    
    const jwt = utils.issueJWT(user);
    //const hashedRefreshToken = await bcrypt.hash(jwt.refreshToken, 10);

    //save refresh token to DB for current user
    await db.updateUserRefreshToken(jwt.refreshToken,user.id);

    //send access token to client
    res.cookie('jwt', jwt.refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000});
    res.status(200).json({success: true, user: {id: user.id, username: user.username}, accessToken: jwt.accessToken, accessExpresIn: jwt.accessExpires});
  }
  catch(err){
    return next(err);
  }
};

exports.logInUserPost = async (req,res,next) => {
  try{
    const user = await db.getUserByUsername(req.body.username);
    if(!user){
      res.status(401).json({success:false, msg: "Could not find user"});
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      // passwords do not match!
      res.status(401).json({success:false, msg: "Incorrect password"});
    }else{
      const jwt = utils.issueJWT(user);
      //const hashedRefreshToken = await bcrypt.hash(jwt.refreshToken, 10);

      //save refresh token to DB for current user
      await db.updateUserRefreshToken(jwt.refreshToken,user.id);

      //send access token to client
      res.cookie('jwt', jwt.refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000});
      res.status(200).json({success: true, user: {id: user.id, username: user.username}, accessToken: jwt.accessToken, expresIn: jwt.expires});
    
    }
  } catch(err){
    next(err);
  }

};

exports.handleLogout = async (req,res, next) => {
  //on client, also delete the accessToken.
  const cookies = req.cookies;

  //check for jwt cookie that we saved in http-only
  if(!cookies?.jwt){
    res.status(204).json({success:true, msg: "no content, cookie cleared."}); //no content, successful
  }
  const refreshToken = cookies.jwt;

  //is refreshToken in db?
  try{
    const user = await db.getUserByRefreshToken(refreshToken);
    if(!user){
      res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
      res.status(204).json({success:true, msg: "no content, cookie cleared."});
    }

    //delete refreshtoken in db
    await db.updateUserDeleteRefreshToken(user.id);
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);
  } catch(err){
    console.log(err);
  }
  
};
