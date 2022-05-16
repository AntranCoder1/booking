const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const hetelRoutes = require("./routes/hotel.routes");

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

// mongoose.connection.on("disconnected", () => {
//     console.log("mongoDB disconnected!");
// });

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hetelRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    connect();
    console.log(`Server running at http://localhost:${PORT}`)
})