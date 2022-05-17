import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/Auth.js";
import userRoutes from "./routes/User.js";
import hotelRoutes from "./routes/Hotel.js";
import roomRoutes from "./routes/Room.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};
  
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(morgan("common"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});
  
const PORT = 5000;
app.listen(PORT, () => {
    connect();
    console.log(`Server running at http://localhost:${PORT}`);
});