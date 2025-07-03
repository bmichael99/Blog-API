const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
require('dotenv').config()

exports.getAllComments = async (req,res) => {
  
};

exports.createComment = async (req,res) => {
  
};

exports.updateComment = async (req,res) => {
  const {commentId} = req.params;
};

exports.deleteComment = async (req,res) => {
  const {commentId} = req.params;
};

exports.getCommentById = async (req,res) => {
  const {commentId} = req.params;
};
