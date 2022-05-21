import mongoose from "mongoose";
import { AlbumInfo } from "../interfaces/album/AlbumInfo";

const AlbumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    thumbnail: {
        type: String
    },
    story: {
        type: String
    }
});

export default mongoose.model<AlbumInfo & mongoose.Document>("Album", AlbumSchema);