const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/account/login", authController.loginUser);
authRouter.post("/account/register", authController.registerUser);

module.exports = authRouter;
