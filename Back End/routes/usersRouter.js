const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();
const { isAuth } = require("../controllers/authMiddleware");
const passport = require('passport');
const { verifyJWT } = require("../middleware/verifyJWT");


userRouter.get("/users", passport.authenticate('jwt', {session: false}), userController.getAllUsers);
userRouter.post("/users", userController.createUser);
userRouter.put("/users/:userId", userController.updateUser);
userRouter.delete("/users/:userId", userController.deleteUser);
userRouter.get("/users/:userId", userController.getUserById);

module.exports = userRouter;


