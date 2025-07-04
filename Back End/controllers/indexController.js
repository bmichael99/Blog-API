const { body, validationResult } = require("express-validator");
const db = require("../db/queries")
const passport = require("passport");
const bcrypt = require("bcryptjs")
const { isAuth } = require("../controllers/authMiddleware");
const utils = require("../lib/utils");
require('dotenv').config()

exports.showHomePage = (req,res) => {
  res.render('index', {title: 'Express Template!'});
};

