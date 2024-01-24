// Schema and Model
import mongoose from "mongoose";
let postSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Types.ObjectId, ref: "users" },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
const PostModel = mongoose.model("message", postSchema);

export default PostModel;
