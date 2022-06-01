import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { CommentCreateDto } from "../interfaces/comment/CommentCreateDto";
const { validationResult } = require("express-validator");
import CommentService from "../services/CommentService";
import User from "../models/User";

const tempMessage = "temp message";

/**
 *  @route GET /comment/album/:albumId
 *  @desc Get Comment
 *  @access Public
 */
const getComments = async (req: Request, res: Response) => {
  const { albumId } = req.params;
  const { userId } = req.body;
  try {
    const data = await CommentService.getComments(albumId, userId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @route POST /comment/:albumId
 *  @desc Create Comment
 *  @access Public
 */
const createComment = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
  const commentCreateDto: CommentCreateDto = req.body;
  const { albumId } = req.params;

  try {
    const data = await CommentService.createComment(albumId, commentCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_COMMENT_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  getComments,
  createComment,
};
