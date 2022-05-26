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
      author: commentCreateDto.author,
      image: commentCreateDto.image,
      createdAt: commentCreateDto.createdAt,
      commentBody: commentCreateDto.commentBody,
      likeNum: commentCreateDto.likeNum,
      hateNum: commentCreateDto.hateNum,
      commentNum: commentCreateDto.commentNum,
      total: commentCreateDto.total,
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

export default {
  createComment,
};
