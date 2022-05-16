const express = require("express");
const router = express.Router();

const hetelControllers = require("../controllers/Hotel.controllers");

// @routes api/hotels/
// @desc POST create new hotel
// @access private
router.post("/", hetelControllers.createHotel);

// @routes api/hotels/:id
// @desc PUT update hotel
// @access private
router.put("/:id", hetelControllers.updateHotel);

// @routes api/hotels/:id
// @desc DELETE delete hotel
// @access private
router.delete("/:id", hetelControllers.deleteHotel);

module.exports = router;