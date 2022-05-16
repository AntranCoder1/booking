const Hotel = require("../models/Hotel.model");

module.exports.createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
};

module.exports.updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been delete.")
    } catch (error) {
        next(error);
    }
};

module.exports.getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllHotels = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel);
    } catch (error) {
        next(error);
    }
};