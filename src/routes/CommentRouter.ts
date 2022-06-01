import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post(
  "/:albumId",
  [body("userId").notEmpty(), body("commentBody").notEmpty()],
  CommentController.createComment
);
router.get("/album/:albumId", CommentController.getComments);

export default router;
