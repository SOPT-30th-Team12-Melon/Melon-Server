import mongoose from "mongoose";
import { AlbumInfo } from "../interfaces/album/AlbumInfo";

const AlbumSchema = new mongoose.Schema({
  albumImage: {
    type: String,
    required: true,
  },
  albumTitle: {
    type: String,
    required: true,
  },
  albumDate: {
    type: Date,
  },
  albumScope: {
    type: Number,
  },
  numberPeople: {
    type: Number,
  },
  singerName: {
    type: String,
  },
  singerImage: {
    type: String,
  },
  likeNumber: {
    type: Number,
  },
  singNumber: {
    type: Number,
  },
  albumTime: {
    type: String,
  },
  albumSing: {
    type: Array,
  },
  singName: {
    type: String,
  },
  singTime: {
    type: String,
  },
  albumType: {
    type: String,
  },
  albumGenre: {
    type: String,
  },
  albumCompany: {
    type: String,
  },
  Company: {
    type: String,
  },
  albumContent: {
    type: String,
  },
});

export default mongoose.model<AlbumInfo & mongoose.Document>(
  "Album",
  AlbumSchema
);
