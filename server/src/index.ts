import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const userRoute = require("./routes/users");
const app: Application = express();

const MONGO_URL =
  "mongodb+srv://testBoy:hieu123@cluster0.ydx2s.mongodb.net/shopee-clone?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected...!"))
  .catch((err) => console.log({ message: err.message }));

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data
app.use("/api/user", userRoute);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("APP IS RUNNING");
});

app.listen(5000, () => console.log("Server running"));
