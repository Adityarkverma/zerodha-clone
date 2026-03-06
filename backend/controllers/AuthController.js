const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { phone, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
     return res.json({ success:false, message: "User already exists" });
    }
    const user = await User.create({ phone, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ phone });
    if (!user) {
      return res.json({ message: "Incorrect password or phone number" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or phone number" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });

  } catch (error) {
    console.error(error);
  }
};
