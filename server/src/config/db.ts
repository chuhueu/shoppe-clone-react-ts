import mongoose from "mongoose";
var colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log(
            colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)
        );
    } catch (error: any) {
        console.log(colors.red.underline.bold(`Error: ${error.message}`));
        process.exit(1);
    }
};

export default connectDB;
