const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
require('dotenv').config()

exports.getAllUsers = async (req,res) => {
  res.status(200).json({success: true, msg: "you are authorized!"});
};

exports.createUser = async (req,res) => {
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

exports.updateUser = async (req,res) => {
  const {userId} = req.params;
};

exports.deleteUser = async (req,res) => {
  const {userId} = req.params;
};

exports.getUserById = async (req,res) => {
  const {userId} = req.params;
};

