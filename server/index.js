import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

// middlewares
app.use("/auth", authRoutes);


const PORT = 5000
app.listen(PORT, () => {
    connect();
    console.log(`Server running at http://localhost:${PORT}`)
})