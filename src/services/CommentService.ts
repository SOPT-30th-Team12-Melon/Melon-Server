import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { CommentCreateDto } from "../interfaces/comment/CommentCreateDto";
import { CommentResponseDto } from "../interfaces/comment/CommentResponseDto";
import { CommentInfo } from "../interfaces/comment/CommentInfo";
import Comment from "../models/Comment";
import User from "../models/User";
import { nextTick } from "process";
import { UserInfo } from "../interfaces/user/UserInfo";
import { userInfo } from "os";
const createComment = async (
  albumId: string,
  commentCreateDto: CommentCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const comment = new Comment({
      albumId: albumId,
      userId: commentCreateDto.userId,
      commentBody: commentCreateDto.commentBody,
    });

    await comment.save();
    const data = {
      _id: comment._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getComments = async (albumId: string): Promise<CommentResponseDto[]> => {
  try {
    const comments = await Comment.find({
      albumId: albumId,
    }).populate("userId", "nickName image");
    const data = await Promise.all(
      comments.map((comment: CommentInfo) => {
        // userId를 가지고 user의 정보를 가져와서
        // nickname하고 image에 넣어주기.
        // user = await User.find({userId : userId}) 이런식으로 user 정보 가져오기
        const result = {
          albumId: comment.albumId,
          userId: comment.userId,
          nickName: comment.nickName,
          image: comment.image,
          commentBody: comment.commentBody,
        };

        return result;
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default {
  createComment,
  getComments,
};
