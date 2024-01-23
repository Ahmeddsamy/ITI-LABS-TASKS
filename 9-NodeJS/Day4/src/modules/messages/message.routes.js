import express from "express";
import {
  deleteMessage,
  getUserMessages,
  sendMessage,
  updateMessage,
} from "./controller/message.controller.js";
import { validation } from "../../middleware/validation.js";
import { addMessageSchema } from "./message.validation.js";
import { auth } from "../../middleware/auth.js";
const messageRoutes = express.Router();
// Get User Messages
messageRoutes.get("/messages", auth, getUserMessages);

// Add Message
messageRoutes.post("/messages", validation(addMessageSchema), sendMessage);

// Delete Message
messageRoutes.delete("/messages", deleteMessage);

// Update Message
messageRoutes.patch("/messages", updateMessage);

export default messageRoutes;
