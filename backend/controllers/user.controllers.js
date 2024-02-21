const User = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body.payload;

    let user = await User.findOne({ email });
    if (user) {
      console.log("User already exists", user);
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    user = await User.create({
      name,
      email,
      password,
    });

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    console.log("New User Created", user);
    res.status(201).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log("New User Registeration Failed", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body.payload;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    console.log("User Logged In", user);
    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log("User Login Failed", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "Logged out",
      });
  } catch (error) {
    console.log("User Logout Failed", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    console.log("My Profile", user);
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("My Profile Failed", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
