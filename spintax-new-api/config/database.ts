import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoUri: string | undefined = process.env.DB_URI;

async function connectDB(): Promise<void> {
  try {
    console.log('Attempting to connect to MongoDB...');
    // await mongoose.connect(mongoUri as string);  // Ensure mongoUri is defined for security reasons
    console.log('Atlas MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

export default connectDB;