const { Router } = require("express");
const commentController = require("../controllers/commentController");
const commentRouter = Router();
const { isAuth } = require("../controllers/authMiddleware");


commentRouter.get("/posts/:postId/comments", commentController.getAllComments);
commentRouter.post("/posts/:postId/comments", commentController.createComment);
commentRouter.put("/comments/:commentId", commentController.updateComment);
commentRouter.delete("/comments/:commentId", commentController.deleteComment);
commentRouter.get("/comments/:commentId", commentController.getCommentById);

module.exports = commentRouter;


