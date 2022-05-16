const express = require("express");
const router = express.Router();

const hotelControllers = require("../controllers/Hotel.controllers");

// @routes api/hotels/
// @desc POST create new hotel
// @access private
router.post("/", hotelControllers.createHotel);

// @routes api/hotels/:id
// @desc PUT update hotel
// @access private
router.put("/:id", hotelControllers.updateHotel);

// @routes api/hotels/:id
// @desc DELETE delete hotel
// @access private
router.delete("/:id", hotelControllers.deleteHotel);

// @routes api/hotels/:id
// @desc GET get a hotel
// @access private
router.get("/:id", hotelControllers.getHotel);

module.exports = router;