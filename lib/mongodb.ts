import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Invalid environment variable: MONGODB_URI");
}

let cachedConnection: typeof mongoose | null = null;
export const connectToMongoDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  const connection = await mongoose.connect(MONGODB_URI);
  cachedConnection = connection;
  return connection;
};
