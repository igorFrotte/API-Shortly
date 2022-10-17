import express from "express";
import * as userController from "../controllers/user.controller.js";
import { validToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users/me", validToken, userController.listUser);

export default router;