import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db";

const userRoute = require("./routes/users");
const app: Application = express();

dotenv.config();

connectDB();

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data
app.use("/api/user", userRoute);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("APP IS RUNNING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`.yellow.bold)
);
