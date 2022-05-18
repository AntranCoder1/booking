import express from "express";
import { 
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRoom,
    updateRoomAvailability
} from "../controllers/Room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// @routes api/rooms/
// @desc POST create a new room
// @access private
router.post("/:hotelid", verifyAdmin, createRoom);

// @routes api/rooms/:id
// @desc PUT update room
// @access private
router.put("/:id", verifyAdmin, updateRoom);

// @routes api/rooms/:id
// @desc DELETE remove room
// @access private
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// @routes api/rooms/find/:id
// @desc GET find a room
// @access private
router.get("/find/:id", getRoom);

// @routes api/rooms/
// @desc GET get all room
// @access public
router.get("/", getAllRoom);

// @routes api/rooms/availability/:id
// @desc PUT update unavailableDates
// @access private
router.put("/availability/:id", updateRoomAvailability);

export default router;