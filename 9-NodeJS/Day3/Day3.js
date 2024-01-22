/* READ ME BEFORE YOUR START



**********Import Postman files included in folder to postman for easier and quicker tests*********


 Enjoy :D

Made By : Ahmed Samy Nashaat
For : Node Js Lab 3 Eng Nourhan

*/

const express = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
// Database connection
mongoose
  .connect(
    "mongodb+srv://sononame:brnXHYz9BIz1oBvT@cluster0.6cavapm.mongodb.net/nodetask3?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("ConnectionError"));
// Schema and Model
let usersSchema = mongoose.Schema({
  userName: String,
  age: Number,
  email: String,
});
const userModel = mongoose.model("user", usersSchema);
const server = express();
server.use(express.json());
// Adding a New User
server.post("/user", async (req, res) => {
  console.log(req.body);
  let foundUserEmail = await userModel.findOne({ email: req.body.email });
  let foundUserName = await userModel.findOne({ userName: req.body.userName });
  if (foundUserEmail || foundUserName) {
    res.send("user already registered");
  } else {
    let addedUser = await userModel.insertMany(req.body);
    res.json({ message: "Added", addedUser });
  }
});
// Get All Users
server.get("/user", async (req, res) => {
  console.log(req.body);
  const users = await userModel.find({});
  res.json({ message: "All Users", users });
});
// Get All Sorted Users
server.get("/userSorted", async (req, res) => {
  console.log(req.body);
  const users = await userModel.find({}).sort({ userName: 1 });
  res.json({ message: "All Users Sorted", users });
});
// Get User by id using params
server.get("/users/:userId", async (req, res) => {
  console.log(req.body);
  const userid = await userModel.findById(req.params.userId);
  res.json({ message: "User Data", userid });
});
// Update Users
server.patch("/user", async (req, res) => {
  console.log(req.body);
  let UpdateUserEmail = await userModel.findOne({ email: req.body.newEmail });
  if (UpdateUserEmail) {
    res.send("email already registered");
  } else {
    const updatedUser = await userModel.updateOne(
      { email: req.body.oldEmail },
      { $set: { email: req.body.newEmail } }
    );
    res.json({ message: "User email updated successfully", updatedUser });
  }
});
// Delete Users
server.delete("/user", async (req, res) => {
  console.log(req.body);
  let deleteUser = await userModel.findOne({ userName: req.body.userName });
  if (deleteUser) {
    await userModel.deleteOne({ userName: req.body.userName });
    res.json({ message: "User deleted successfully", deleteUser });
  } else {
    res.send("User Name Not Found");
  }
});
///////////////////////////////////////////////////////////////////////////////
// Schema and Model
let messagesSchema = mongoose.Schema({
  fromUser: ObjectId,
  toUser: ObjectId,
  content: String,
});
const Message = mongoose.model("message", messagesSchema);
// Get All Messages
server.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

// Add Message
server.post("/messages", async (req, res) => {
  let message = new Message(req.body);
  message = await message.save();
  res.send(message);
});

// Delete Message
server.delete("/messages", async (req, res) => {
  const { messageId } = req.body;
  const result = await Message.findOneAndDelete({ _id: messageId });
  res.send(result);
});

// Update Message
server.patch("/messages", async (req, res) => {
  const { messageId } = req.body;
  const messageData = req.body;
  const message = await Message.findByIdAndUpdate(messageId, messageData);
  res.send(message);
});

/// Search Message by ID using params
server.get("/messages/:messageId", async (req, res) => {
  const messageId = req.params.messageId;
  const message = await Message.findById(messageId);

  if (!message) {
    return res.send("message not found.");
  }

  res.send(message);
});

//
server.listen(3000);
