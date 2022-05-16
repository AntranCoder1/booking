import express from "express";
import { 
    updateUser,
    deleteUser,
    getUser,
    getUsers
} from "../controllers/User.js";

import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// @routes api/users/:id
// @desc PUT update user
// @access private
router.put("/:id", verifyUser, updateUser);

// @routes api/users/:id
// @desc DELETE remove user
// @access private
router.delete("/:id", verifyUser, deleteUser);

// @routes api/users/:id
// @desc GET get a user
// @access private
router.get("/find/:id", verifyUser, getUser);

// @routes api/users/
// @desc GET get all users
// @access private
router.get("/", verifyAdmin, getUsers);

export default router;