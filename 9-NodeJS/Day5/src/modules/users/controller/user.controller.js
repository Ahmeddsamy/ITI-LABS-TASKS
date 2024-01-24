import userModel from "../../../../DB/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendVerificationMail } from "../../../services/sendEmail.js";
// Adding a New User
export const signupUser = async (req, res) => {
  console.log(req.body);
  let { userName, password, CPassword, email, age, gender } = req.body;
  if (password != CPassword)
    return res.json({ message: "passwords don't match" });
  let foundUserEmail = await userModel.findOne({ email: req.body.email });
  let foundUserName = await userModel.findOne({
    userName: req.body.userName,
  });
  if (foundUserEmail || foundUserName) {
    res.json({ message: "user already registered" });
  } else {
    let hashedPassword = bcrypt.hashSync(password, 10);
    let addedUser = await userModel.insertMany({
      userName,
      email,
      age,
      password: hashedPassword,
      gender,
    });
    let token = jwt.sign({ id: addedUser[0]._id }, "NewUser");
    let url = `http://localhost:3000/user/verify/${token}`;
    sendVerificationMail(email, url);
    res.json({ message: "Added", addedUser });
  }
};
// User Verification
export const verifyAccount = (req, res) => {
  let { token } = req.params;
  jwt.verify(token, "NewUser", async (err, decoded) => {
    let userFound = await userModel.findById(decoded.id);
    if (!userFound) return res.json({ message: "invalid user" });
    let updatedUser = await userModel.findByIdAndUpdate(
      decoded.id,
      { isVerified: true },
      { new: true }
    );
    res.json({ message: "User Verified", updatedUser });
  });
};
// Sign in
export const signinUser = async (req, res) => {
  let { email, password } = req.body;
  let userFound = await userModel.findOne({ email });
  if (!userFound) return res.json({ message: "You need to register first" });
  if (!userFound.isVerified)
    return res.json({ message: "please verify your account first" });
  let matchedPassword = bcrypt.compareSync(password, userFound.password);
  if (matchedPassword) {
    let token = jwt.sign({ id: userFound._id }, "ITI");
    res.json({ message: "Welcome Home", token });
  } else {
    res.json({ message: "Invalid Password" });
  }
};
// Get All Users
export const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.json({ message: "All Users", users });
};
// Search for users by name starting with 'X' and age less than 'Y'
export const searchUsersByNameAndAge = async (req, res) => {
  const { startLetter, maxAge } = req.query;

  try {
    const users = await userModel.find({
      userName: { $regex: `^${startLetter}`, $options: "i" },
      age: { $lt: maxAge },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error searching for users", error });
  }
};

// Search for users where age is between 'X' and 'Y'
export const searchUsersByAgeRange = async (req, res) => {
  const { minAge, maxAge } = req.query;

  try {
    const users = await userModel.find({
      age: { $gte: minAge, $lte: maxAge },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error searching for users", error });
  }
};

// Update User Name
export const updateUserName = async (req, res) => {
  console.log(req.body);

  const userId = req.userID;

  // Find user by ID
  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // Check if the new userName is used
  let userNameExists = await userModel.findOne({
    userName: req.body.newUserName,
  });
  if (userNameExists) {
    return res.status(400).json({ message: "UserName already in use" });
  }
  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    { $set: { userName: req.body.newUserName } },
    { new: true }
  );

  res.json({ message: "UserName updated successfully", updatedUser });
};

// Delete User
export const deleteUser = async (req, res) => {
  const userId = req.userID;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle potential errors
    res.status(500).json({ message: "Error deleting user", error });
  }
};

////////////////////////////////////////////////////////////////////////
