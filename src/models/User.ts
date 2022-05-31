import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
