import mongoose from "mongoose";
import { UserInfo } from "../user/UserInfo";

export interface CommentCreateDto {
  albumId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  commentBody: string;
}
