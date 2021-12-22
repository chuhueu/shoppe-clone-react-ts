import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
const cors = require("cors");
var colors = require("colors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const brandRoute = require("./routes/brandRoute");
const categoryRoute = require("./routes/categoryRoute");
dotenv.config();

connectDB();

const app: Application = express();
app.use(cors());
//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/brand", brandRoute);
app.use("/api/category", categoryRoute);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("APP IS RUNNING");
});

const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
