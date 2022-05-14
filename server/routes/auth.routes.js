import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is auth endPoint")
});

router.get("/register", (req, res) => {
    res.send("Hello, this is register endPoint")
});

router.get("/login", (req, res) => {
    res.send("Hello, this is login endPoint")
});

export default router;