import { AlbumInfo } from "../album/AlbumInfo";

export interface CommentResponseDto {
  albumId: AlbumInfo;
  author: string;
  image: string;
  createdAt: Date;
  commentBody: string;
  likeNum: number;
  hateNum: number;
  commentNum: number;
  total: number;
}
