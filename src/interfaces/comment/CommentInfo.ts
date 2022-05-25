import mongoose from "mongoose";

export interface CommentInfo {
  albumId: mongoose.Types.ObjectId;
  author: string;
  image: string;
  createdAt: Date;
  commentBody: string;
  likeNum: number;
  hateNum: number;
  commentNum: number;
  total: number;
}
