import express from "express";
import {
  signupUser,
  deleteUser,
  getAllSortedUsers,
  getAllUsers,
  getUserByID,
  updateUserEmail,
  signinUser,
} from "./controller/user.controller.js";
import { validation } from "../../middleware/validation.js";
import { addUserSchema, updatedUserSchema } from "./user.validation.js";
const userRoutes = express.Router();
// Adding a New User
userRoutes.post("/user/signup", validation(addUserSchema), signupUser);
// Sign In
userRoutes.post("/user/signin", signinUser);
// Get All Users
userRoutes.get("/user", getAllUsers);
// Get All Sorted Users
userRoutes.get("/userSorted", getAllSortedUsers);
// Get User by id using params
userRoutes.get("/users/:userId", getUserByID);
// Update Users
userRoutes.patch("/user", validation(updatedUserSchema), updateUserEmail);
// Delete Users
userRoutes.delete("/user", deleteUser);

export default userRoutes;
