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

const getComments = async (albumId: string): Promise<CommentResponseDto[]> => {
  try {
    const comments = await Comment.find({
      albumId: albumId,
    });

    const data = await Promise.all(
      comments.map((comment: any) => {
        const result = {
          albumId: comment.albumId,
          author: comment.author,
          image: comment.image,
          createdAt: comment.createdAt,
          commentBody: comment.commentBody,
          likeNum: comment.likeNum,
          hateNum: comment.hateNum,
          commentNum: comment.commentNum,
          total: comment.total,
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
