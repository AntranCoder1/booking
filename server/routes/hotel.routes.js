const express = require("express");
const router = express.Router();

const hotelControllers = require("../controllers/Hotel.controllers");

const verifyAdmin = require("../utils/verifyToken");

// @routes api/hotels/
// @desc POST create new hotel
// @access private
router.post("/", verifyAdmin, hotelControllers.createHotel);

// @routes api/hotels/:id
// @desc PUT update hotel
// @access private
router.put("/:id", verifyAdmin, hotelControllers.updateHotel);

// @routes api/hotels/:id
// @desc DELETE delete hotel
// @access private
router.delete("/:id", verifyAdmin, hotelControllers.deleteHotel);

// @routes api/hotels/:id
// @desc GET get a hotel
// @access private
router.get("/:id", hotelControllers.getHotel);

// @routes api/hotels/
// @desc GET get all hotel
// @access private
router.get("/", hotelControllers.getAllHotels);

module.exports = router;