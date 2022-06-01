import mongoose from "mongoose";

export interface CommentInfo {
  albumId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  nickName: string;
  image: string;
  commentBody: string;
}
