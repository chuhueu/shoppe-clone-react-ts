import express, { Application, Request, Response } from "express";
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import cors = require("cors");
var colors = require("colors");

const userRoutes = require("./routes/auth/userRoute");
const addressRoute = require("./routes/auth/addressRoute");
const authRoute = require("./routes/auth/authRoute");
const roleRoute = require("./routes/auth/roleRoute");
const permissionRoute = require("./routes/auth/permissionRoute");
const productRoute = require("./routes/product/productRoute");
const brandRoute = require("./routes/product/brandRoute");
const categoryRoute = require("./routes/product/categoryRoute");
const productTypeRoute = require("./routes/product/productTypeRoute");
const cartRoute = require("./routes/cart/cartRoute");
const app: Application = express();

connectDB();

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use(cors());

app.set("trust proxy", 1);

app.use("/api/user", userRoutes);
app.use("/api/address", addressRoute);
app.use("/api/auth", authRoute);
app.use("/api/role", roleRoute);
app.use("/api/permission", permissionRoute);
app.use("/api/product", productRoute);
app.use("/api/brand", brandRoute);
app.use("/api/category", categoryRoute);
app.use("/api/productType", productTypeRoute);
app.use("/api/cart", cartRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("APP IS RUNNING");
});
const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
