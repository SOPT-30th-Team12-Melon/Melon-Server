import mongoose from "mongoose";
import { CommentInfo } from "../interfaces/comment/CommentInfo";

const CommentSchema = new mongoose.Schema({
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

export default mongoose.model<CommentInfo & mongoose.Document>("Comment", CommentSchema);