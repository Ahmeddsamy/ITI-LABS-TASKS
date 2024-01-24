// Schema and Model
import mongoose from "mongoose";
let usersSchema = new mongoose.Schema({
  userName: String,
  age: Number,
  email: String,
  password: String,
  CPassword: String,
  gender: String,
  isVerified: { type: Boolean, default: false },
});
const userModel = mongoose.model("user", usersSchema);

export default userModel;
