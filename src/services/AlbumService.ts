import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { AlbumCreateDto } from "../interfaces/album/AlbumCreateDto";
import { AlbumInfo } from "../interfaces/album/AlbumInfo";
import { AlbumResponseDto } from "../interfaces/album/AlbumResponseDto";
import Album from "../models/Album";

const createAlbum = async (
  albumCreateDto: AlbumCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const album = new Album(albumCreateDto);

    await album.save();

    const data = {
      _id: album._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAlbum = async (albumId: string): Promise<AlbumResponseDto | null> => {
  try {
    const album = await Album.findById(albumId).populate("albumImage");
    if (!album) return null;

    return album;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getAlbum,
  createAlbum,
};
