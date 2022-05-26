import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post(
  "/:albumId",
  [
    body("author").notEmpty(),
    body("image").notEmpty(),
    body("createdAt").notEmpty(),
    body("commentBody").notEmpty(),
    body("likeNum").notEmpty(),
    body("hateNum").notEmpty(),
    body("commentNum").notEmpty(),
    body("total").notEmpty(),
  ],
  CommentController.createComment
);
router.get("/album/:albumId", CommentController.getComment);

export default router;
