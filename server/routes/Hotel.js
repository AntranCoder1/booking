import express from "express";
import { 
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    countByCity,
    countByType,
    getHotelRooms,
    getHotels
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

// @routes api/hotels/countByCity?cities=berlin,madrid,london
// @desc GET count by city
// @access public
router.get("/countByCity", countByCity);

// @routes api/hotels/countByType
// @desc GET count by type
// @access public
router.get("/countByType", countByType);

// @routes api/hotels/
// @desc GET get hotel room
// @access public
router.get("/room/:id", getHotelRooms);

// @routes api/hotels/
// @desc GET find all hotel
// @access public
router.get("/", getHotels);

export default router;