import mongoose from "mongoose";

type MongoUri = string | undefined;

async function connectDB() {
  const mongoUri: MongoUri = process.env.MONGO_URI || "";
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strict", true);
  await mongoose.connect(mongoUri);
  console.log("Connected to Mongo");
}

export { connectDB };
