import { Router } from "express";
import AlbumController from "../controllers/AlbumController";
import { body } from "express-validator/check";

const router: Router = Router();

router.get('/recent', AlbumController.getAlbums);
router.get('/:albumId', AlbumController.getAlbum);

export default router; 