//router index file
import { Router } from 'express';
import ReviewRouter from './ReviewRouter';
import UserRouter from "./UserRouter";
import AlbumRouter from './AlbumRouter';
import CommentRouter from './CommentRouter';

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/review', ReviewRouter);

router.use('/album', AlbumRouter);
router.use('/comment', CommentRouter);

export default router;