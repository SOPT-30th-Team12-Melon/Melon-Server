import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { AlbumService } from "../services";
const tempMessage = "temp message";
import { validationResult } from "express-validator";
import { AlbumCreateDto } from "../interfaces/album/AlbumCreateDto";

/**
 *  @route POST /album
 *  @desc Create Album
 *  @access Public
 */
const createAlbum = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const albumCreateDto: AlbumCreateDto = req.body;

  try {
    const data = await AlbumService.createAlbum(albumCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_ALBUM_SUCCESS, data)
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

/**
 *  @route GET /album/:albumId
 *  @desc Get Album Comment
 *  @access Public
 */
const getAlbum = async (req: Request, res: Response) => {
  const { albumId } = req.params;

  try {
    const data = await AlbumService.getAlbum(albumId);
    if (!data)
      res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_Album_SUCCESS, data));
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
  createAlbum,
  getAlbum,
};
