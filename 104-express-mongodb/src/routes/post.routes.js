const express = require("express");
const { fetchAllPosts, fetchPost, createPost, updatePost, deletePost } = require("../controller/post.controller")

const postRouter = new express.Router();

postRouter
    .route("/")
    .get(fetchAllPosts)
    .post(createPost)

postRouter.route("/:postId")
    .get(fetchPost)
    .patch(updatePost)
    .delete(deletePost)

module.exports = postRouter;
