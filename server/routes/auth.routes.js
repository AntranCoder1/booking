const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/Auth.controllers");

// @routes api/auth/register
// @desc POST register
// @access public
router.post("/register", authControllers.register);

// @routes api/auth/login
// @desc POST login
// @access public
router.post("/login", authControllers.login);

module.exports = router;