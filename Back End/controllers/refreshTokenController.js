const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
const utils = require("../lib/utils");
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config()
const fs = require('fs');
const PUB_KEY = fs.readFileSync(__dirname + "/../id_rsa_pub.pem", "utf8");
const PRIV_KEY = fs.readFileSync(__dirname + "/../id_rsa_priv.pem", "utf8");

exports.handleRefreshToken = async (req,res, next) => {
  const cookies = req.cookies;
  console.log(cookies);

  //check for jwt cookie that we saved in http-only
  if(!cookies?.jwt){
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;

  try{
    const user = await db.getUserByRefreshToken(refreshToken);
    if(!user){
      res.status(403).json({success:false, msg: "Could not find user"});
    }

    jsonwebtoken.verify(refreshToken, PUB_KEY, { algorithms: ["RS256"] }, (err, payload) => {
        if (err || user.id !== payload.sub) {
          res.sendStatus(403);
        }

        const newPayload = {
          sub: user.id,
          iat: Date.now()/1000,
        };
        const expire = "30s";
        const accessToken = "Bearer " + jsonwebtoken.sign(newPayload, PRIV_KEY, {
          expiresIn: expire,
          algorithm: "RS256",
        });

        res.status(200).json({success: true, user: {id: user.id, username: user.username}, accessToken: accessToken, expresIn: expire});
      });

  } catch(err){
    console.log(err);
  }
  
};




