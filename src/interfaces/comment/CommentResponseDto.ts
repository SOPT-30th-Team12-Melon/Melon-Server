import { UserInfo } from "../user/UserInfo";
import { AlbumInfo } from "../album/AlbumInfo";

export interface CommentResponseDto {
  albumId: AlbumInfo;
  userId: UserInfo;
  commentBody: string;
}
