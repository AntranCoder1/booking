const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/Auth.controllers");

// @routes api/auth/register
// @desc POST register
// @access public
router.post("/register", authControllers.register);

module.exports = router;