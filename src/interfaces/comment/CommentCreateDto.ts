import mongoose from "mongoose";

export interface CommentCreateDto {
  albumId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  commentBody: string;
}
