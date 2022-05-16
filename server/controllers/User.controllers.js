const User = require("../models/User.model");

module.exports.updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been delete!");
    } catch (error) {
        next(error);
    }
};

module.exports.getUser = async (req, res, next) => {
    try {
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllUser = async (req, res, next) => {
    try {
        const getAllUser = await User.find();
        res.status(200).json(getAllUser);
    } catch (error) {
        next(error);
    }
};
