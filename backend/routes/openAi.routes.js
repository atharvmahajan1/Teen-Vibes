const express = require("express");
const router = express.Router();
const {
  openAiTextController,
  opeAiFileController,
} = require("../controllers/openAi.controller");

router.route("/openaitext").post(openAiTextController);
router.route("/openaifile").post(opeAiFileController);

module.exports = router;
