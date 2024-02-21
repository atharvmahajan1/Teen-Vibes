const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const cors = require("cors");

// Setting up CORS
const corsOptions = {
  origin: ["https://www.teenvibes.org", "http://localhost:5173"],
  credentials: true,
  accessControlAllowOrigin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  accessControlAllowCredentials: true,
  optionSuccessStatus: 200,
};
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/config.env" });
}
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing all routes
const userRoutes = require("./routes/user.routes");
const openAiRoutes = require("./routes/openAi.routes");

// Mounting the routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", openAiRoutes);

module.exports = app;
