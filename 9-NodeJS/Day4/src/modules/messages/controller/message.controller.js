import messageModel from "../../../../DB/models/message.model.js";
import userModel from "../../../../DB/models/user.model.js";
// Get User Messages
export const getUserMessages = async (req, res) => {
  const messages = await messageModel.find({ recievedUserID: req.userID });
  res.json({ message: "Messages Found", messages });
};

// Add Message
export const sendMessage = async (req, res) => {
  let userFound = await userModel.findById(req.body.recievedUserID);
  if (userFound) {
    let message = new messageModel(req.body);
    message = await message.save();
    res.json({ message: "Message Sent", message });
  } else {
    res.send("User Not Found");
  }
};
// Delete Message
export const deleteMessage = async (req, res) => {
  const { messageId } = req.body;
  const result = await messageModel.findOneAndDelete({ _id: messageId });
  res.send(result);
};
// Update Message
export const updateMessage = async (req, res) => {
  const { messageId } = req.body;
  const messageData = req.body;
  const message = await messageModel.findByIdAndUpdate(messageId, messageData);
  res.send(message);
};
