import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { validSignUp } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", validSignUp, authController.signUp);
router.post("/signin", authController.signIn);

export default router;