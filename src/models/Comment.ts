import mongoose from "mongoose";
import { CommentInfo } from "../interfaces/comment/CommentInfo";
import Album from "./Album";

const CommentSchema = new mongoose.Schema({
  albumId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Album",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  commentBody: {
    type: String,
  },
});

export default mongoose.model<CommentInfo & mongoose.Document>(
  "Comment",
  CommentSchema
);
