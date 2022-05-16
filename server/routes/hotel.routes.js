const express = require("express");
const router = express.Router();

const hetelControllers = require("../controllers/Hotel.controllers");

// @routes api/hotels/
// @desc POST create new hotel
// @access private
router.post("/", hetelControllers.createHotel);

module.exports = router;