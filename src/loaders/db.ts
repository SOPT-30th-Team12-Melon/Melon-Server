import mongoose from "mongoose";
import config from "../config";
import Album from "../models/Album";
import Comment from "../models/Comment";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");

    Album.createCollection().then(function (collection) {
      console.log("Album Collection is created!");
    });
    Comment.createCollection().then(function (collection) {
      console.log("Comment Collection is created!");
    })
    
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
