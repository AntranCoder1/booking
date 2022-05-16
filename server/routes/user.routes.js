const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/User.controllers");

// @routes api/users/:id
// @desc PUT update user
// @access private
router.put("/:id", userControllers.updateUser);

// @routes api/users/:id
// @desc DELETE remove user
// @access private
router.delete("/:id", userControllers.deleteUser);

// @routes api/users/:id
// @desc GET get a user
// @access private
router.get("/:id", userControllers.getUser);

// @routes api/users/
// @desc GET get all users
// @access private
router.get("/", userControllers.getAllUser);

module.exports = router;