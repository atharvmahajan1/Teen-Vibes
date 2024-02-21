const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  myProfile,
} = require("../controllers/user.controllers");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, myProfile);

module.exports = router;
