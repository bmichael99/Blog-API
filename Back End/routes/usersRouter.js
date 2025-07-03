const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();
const { isAuth } = require("../controllers/authMiddleware");


userRouter.get("/users", userController.getAllUsers);
userRouter.post("/users", userController.createUser);
userRouter.put("/users/:userId", userController.updateUser);
userRouter.delete("/users/:userId", userController.deleteUser);
userRouter.get("/users/:userId", userController.getUserById);

module.exports = userRouter;


