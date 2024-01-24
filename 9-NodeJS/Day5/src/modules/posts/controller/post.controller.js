import PostModel from "../../../../DB/models/post.model.js";
import { addPostSchema } from "../post.validation.js";

// Add Post (User Authentication Required)
export const addPost = async (req, res) => {
  try {
    const { error } = addPostSchema.body.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    if (!req.userID) {
      return res.status(401).json({ message: "User authentication required" });
    }
    const { title, content } = req.body;
    const newPost = new PostModel({
      userID: req.userID,
      title,
      content,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating post", error });
  }
};

// Delete Post (User Authentication Required)
export const deletePost = async (req, res) => {
  const userId = req.userID;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOneAndDelete({
      _id: postId,
      userID: userId,
    });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

// Update Post (User Authentication Required)
export const updatePost = async (req, res) => {
  const userId = req.userID;
  const { postId } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId, userID: userId },
      { title, content },
      { new: true }
    );

    if (!updatedPost) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }

    res.json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};
// Get All Posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
};
// Get All Posts with User Info
export const getPostsWithUserInfo = async (req, res) => {
  try {
    const posts = await PostModel.find({}).populate({
      path: "userID",
      model: "user",
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
};
// Sort Posts Descending by Date
export const sortPostsByDate = async (req, res) => {
  try {
    const posts = await PostModel.find({}).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error sorting posts", error });
  }
};
