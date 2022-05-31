import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { CommentCreateDto } from "../interfaces/comment/CommentCreateDto";
import { CommentResponseDto } from "../interfaces/comment/CommentResponseDto";
import { CommentInfo } from "../interfaces/comment/CommentInfo";
import Comment from "../models/Comment";

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
    });

    console.log(comments)

    const data = await Promise.all(
      comments.map((comment: CommentInfo) => {
        const result = {
          albumId: comment.albumId,
          userId: comment.userId,
          nickname : "test",
          image : "test",
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
