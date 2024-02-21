const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "No Authorization header found",
    });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Please login first",
    });
  }
  console.log("Token", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
