const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
require('dotenv').config()

exports.getAllPosts = async (req,res) => {
  
};

exports.createPost = async (req,res) => {
  
};

exports.updatePost = async (req,res) => {
  const {postId} = req.params;
};

exports.deletePost = async (req,res) => {
  const {postId} = req.params;
};

exports.getPostById = async (req,res) => {
  const {postId} = req.params;
};
