import express from "express";
import * as urlController from "../controllers/url.controller.js";
import { validToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/urls/shorten", validToken, urlController.short);
router.get("/urls/:id", urlController.getShort);

export default router;