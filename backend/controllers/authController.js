const UserModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Please provide email, password and phone number" });
    }

    const user = await UserModel.find({ email: email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await UserModel.create({
      email,
      password,
      name,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await UserModel.find({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authController = {
  registerUser,
  loginUser,
};

module.exports = authController;
