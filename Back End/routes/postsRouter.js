const { Router } = require("express");
const postController = require("../controllers/postController");
const postRouter = Router();
const { isAuth } = require("../controllers/authMiddleware");


postRouter.get("/posts", postController.getAllPosts);
postRouter.post("/posts", postController.createPost);
postRouter.put("/posts/:postId", postController.updatePost);
postRouter.delete("/posts/:postId", postController.deletePost);
postRouter.get("/posts/:postId", postController.getPostById);

module.exports = postRouter;


