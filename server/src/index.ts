import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
const cors = require("cors");
var colors = require("colors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./config/passport");

const userRoutes = require("./routes/userRoute");
const socialRoutes = require("./routes/socialRoute");
const productRoutes = require("./routes/productRoute");
const brandRoutes = require("./routes/brandRoute");
const categoryRoutes = require("./routes/categoryRoute");

connectDB();

const app: Application = express();

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: `${process.env.CLIENT_URL!}`, credentials: true }));

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use("/api/user", userRoutes);
app.use("/api/auth", socialRoutes);
app.use("/api/product", productRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/category", categoryRoutes);

const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
