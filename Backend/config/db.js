import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection SUCCESSFULLY");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}
export default connectDB