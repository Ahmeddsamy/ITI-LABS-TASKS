import express from "express";
import { auth } from "../../middleware/auth.js";
import {
  addPost,
  deletePost,
  getAllPosts,
  getPostsWithUserInfo,
  sortPostsByDate,
  updatePost,
} from "./controller/post.controller.js";
const postRoutes = express.Router();

postRoutes.post("/posts", auth, addPost);
postRoutes.delete("/posts/:postId", auth, deletePost);
postRoutes.put("/posts/:postId", auth, updatePost);
postRoutes.get("/posts", getAllPosts);
postRoutes.get("/posts-with-user", getPostsWithUserInfo);
postRoutes.get("/posts-sorted", sortPostsByDate);

export default postRoutes;
