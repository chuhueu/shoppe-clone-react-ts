import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import cors = require("cors");
var colors = require("colors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./config/passport");

const userRoutes = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const roleRoute = require("./routes/roleRoute");
const permissionRoute = require("./routes/permissionRoute");
const productRoutes = require("./routes/productRoute");
const brandRoutes = require("./routes/brandRoute");
const categoryRoutes = require("./routes/categoryRoute");

const app: Application = express();

connectDB();

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ["http://localhost:3000", `${process.env.CLIENT_URL!}`];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};
app.use(cors(options));

app.set("trust proxy", 1);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);
app.use("/api/role", roleRoute);
app.use("/api/permission", permissionRoute);
app.use("/api/product", productRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/category", categoryRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("APP IS RUNNING");
});
const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
