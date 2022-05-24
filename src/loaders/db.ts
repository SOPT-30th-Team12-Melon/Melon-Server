import mongoose from "mongoose";
import config from "../config";
import Album from "../models/Album";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");

    Album.createCollection().then(function (collection) {
      console.log("Album Collection is created!");
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
