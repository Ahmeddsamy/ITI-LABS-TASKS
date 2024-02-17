// Schema and Model
import mongoose from "mongoose";
let messagesSchema = new mongoose.Schema({
  recievedUserID: { type: mongoose.Types.ObjectId, ref: "User" },
  content: String,
});
const messageModel = mongoose.model("message", messagesSchema);

export default messageModel;
