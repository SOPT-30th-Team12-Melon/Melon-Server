import { Router } from "express";
import AlbumController from "../controllers/AlbumController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post(
  "/",
  [
    body("albumImage").notEmpty(),
    body("albumTitle").notEmpty(),
    body("albumDate").notEmpty(),
    body("albumScope").notEmpty(),
    body("numberPeople").notEmpty(),
    body("singerName").notEmpty(),
    body("singerImage").notEmpty(),
    body("likeNumber").notEmpty(),
    body("singNumber").notEmpty(),
    body("albumTime").notEmpty(),
    body("albumSing").notEmpty(),
    body("singName").notEmpty(),
    body("singTime").notEmpty(),
    body("albumType").notEmpty(),
    body("albumGenre").notEmpty(),
    body("albumCompany").notEmpty(),
    body("company").notEmpty(),
    body("albumContent").notEmpty(),
  ],
  AlbumController.createAlbum
);

router.get("/:albumId", AlbumController.getAlbum);

export default router;
