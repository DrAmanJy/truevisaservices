import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not defined. Skipping database connection. Data will not be saved.");
    return false;
  }
  
  if (mongoose.connection.readyState >= 1) {
    return true;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return false;
  }
};
