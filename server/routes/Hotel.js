import express from "express";
import { 
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel
} from "../controllers/Hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// @routes api/hotels/
// @desc POST create new hotel
// @access private
router.post("/", verifyAdmin, createHotel);

// @routes api/hotels/:id
// @desc PUT update hotel
// @access private
router.put("/:id", verifyAdmin, updateHotel);

// @routes api/hotels/:id
// @desc DELETE delete hotel
// @access private
router.delete("/:id", verifyAdmin, deleteHotel);

// @routes api/hotels/:id
// @desc GET get a hotel
// @access private
router.get("/find/:id", getHotel);

export default router;