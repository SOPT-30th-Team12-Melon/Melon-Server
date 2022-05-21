import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post('/movies/:movieId', [
    body('title').notEmpty(),
    body('writer').notEmpty(),
    body('content').notEmpty()
], CommentController.createReview);

router.get('/movies/:movieId', CommentController.getReviews);

export default router; 