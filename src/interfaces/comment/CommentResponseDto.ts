import { UserInfo } from "../user/UserInfo";
import { AlbumInfo } from "../album/AlbumInfo";
import mongoose from "mongoose";

export interface CommentResponseDto {
  albumId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  nickName: string;
  image: string;
  commentBody: string;
}
