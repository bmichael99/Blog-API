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
    res.json({success: true, user: user, token: jwt.token, expresIn: jwt.expires});
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
      res.status(200).json({success: true, user: user, token: jwt.token, expresIn: jwt.expires});
    }
  } catch(err){
    next(err);
  }

};