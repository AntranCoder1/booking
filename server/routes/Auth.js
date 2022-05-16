import express from "express";
import { register, login } from "../controllers/Auth.js";

const router = express.Router();

// @routes api/auth/register
// @desc POST register
// @access public
router.post("/register", register);

// @routes api/auth/login
// @desc POST login
// @access public
router.post("/login", login);

export default router