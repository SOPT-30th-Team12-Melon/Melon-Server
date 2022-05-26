import mongoose from "mongoose";
import { CommentInfo } from "../interfaces/comment/CommentInfo";
import Album from "./Album";

const CommentSchema = new mongoose.Schema({
  albumId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Album",
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  commentBody: {
    type: String,
  },
  likeNum: {
    type: Number,
  },
  hateNum: {
    type: Number,
  },
  commentNum: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

export default mongoose.model<CommentInfo & mongoose.Document>(
  "Comment",
  CommentSchema
);
