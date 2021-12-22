import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
var colors = require("colors");

const userRoute = require("./routes/users");

dotenv.config();

connectDB();

const app: Application = express();

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use("/api/user", userRoute);

const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
