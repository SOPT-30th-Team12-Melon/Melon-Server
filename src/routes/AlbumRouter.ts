import { Router } from "express";
import AlbumController from "../controllers/AlbumController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post('/movies/:movieId', [
    body('title').notEmpty(),
    body('writer').notEmpty(),
    body('content').notEmpty()
], AlbumController.createReview);

router.get('/movies/:movieId', AlbumController.getReviews);

export default router; 