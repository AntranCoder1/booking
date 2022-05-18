import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
  
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateRoom);
    } catch (error) {
        next(error);
    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            })
        } catch (error) {
            next(error);
        }
        res.status(200).json("Room has been delete!");
    } catch (error) {
        next(error);
    }
};

export const getRoom = async (req, res, next) => {
    try {
        const getRoom = await Room.findById(req.params.id);
        res.status(200).json(getRoom);
    } catch (error) {
        next(error);
    }
};

export const getAllRoom = async (req, res, next) => {
    try {
        const getRooms = await Room.find();
        res.status(200).json(getRooms);
    } catch (error) {
        next(error);
    }
};

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            { $push: {
                "roomNumbers.$.unavailableDates": req.body.dates 
            } }
        );
        res.status(200).json("Room has been updated!");
    } catch (error) {
        next(error);
    }
};