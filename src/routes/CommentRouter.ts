import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post("/:albumId", CommentController.createComment);
router.get("/album/:albumId", CommentController.getComment);

export default router;
