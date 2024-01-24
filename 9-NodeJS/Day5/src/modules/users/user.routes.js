import express from "express";
import {
  signupUser,
  deleteUser,
  getAllUsers,
  signinUser,
  verifyAccount,
  updateUserName,
  searchUsersByNameAndAge,
  searchUsersByAgeRange,
} from "./controller/user.controller.js";
import { validation } from "../../middleware/validation.js";
import { addUserSchema } from "./user.validation.js";
import { auth } from "../../middleware/auth.js";
const userRoutes = express.Router();
// Signup
userRoutes.post("/user/signup", validation(addUserSchema), signupUser);
// User Verification
userRoutes.get("/user/verify/:token", verifyAccount);
// Sign In
userRoutes.post("/user/signin", signinUser);
// Update Users
userRoutes.patch("/user", auth, updateUserName);
// Delete Users
userRoutes.delete("/user", auth, deleteUser);
// Get All Users
userRoutes.get("/user", getAllUsers);
// Search for users by name starting with 'X' and age less than 'Y'
userRoutes.get("/search/name-age", searchUsersByNameAndAge);
// Get User by id using params
userRoutes.get("/search/age-range", searchUsersByAgeRange);

export default userRoutes;
