import mongoose from "mongoose";
import { UserInfo } from "../user/UserInfo";

export interface CommentInfo {
  albumId: mongoose.Types.ObjectId;
  userId: UserInfo;
  commentBody: string;
}
