import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
const cors = require("cors");
var colors = require("colors");

const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const brandRoutes = require("./routes/brandRoute");
const categoryRoutes = require("./routes/categoryRoute");

dotenv.config();

connectDB();

const app: Application = express();

app.use(cors());

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/category", categoryRoutes);

const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
