import userModel from "../../../../DB/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Adding a New User
export const signupUser = async (req, res) => {
  console.log(req.body);
  let { userName, password, CPassword, email, age } = req.body;
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
    });
    res.json({ message: "Added", addedUser });
  }
};
// Sign in
export const signinUser = async (req, res) => {
  let { email, password } = req.body;
  let userFound = await userModel.findOne({ email });
  if (!userFound) return res.json({ message: "You need to register first" });
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
// Get All Sorted Users
export const getAllSortedUsers = async (req, res) => {
  console.log(req.body);
  const users = await userModel.find({}).sort({ userName: 1 });
  res.json({ message: "All Users Sorted", users });
};
// Get User by id using params
export const getUserByID = async (req, res) => {
  console.log(req.body);
  const userid = await userModel.findById(req.params.userId);
  res.json({ message: "User Data", userid });
};

// Update Users
export const updateUserEmail = async (req, res) => {
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
};
// Delete Users
export const deleteUser = async (req, res) => {
  console.log(req.body);
  let deleteUser = await userModel.findOne({ userName: req.body.userName });
  if (deleteUser) {
    await userModel.deleteOne({ userName: req.body.userName });
    res.json({ message: "User deleted successfully", deleteUser });
  } else {
    res.send("User Name Not Found");
  }
};
