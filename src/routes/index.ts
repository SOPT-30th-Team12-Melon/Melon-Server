//router index file
import { Router } from 'express';
import AlbumRouter from './AlbumRouter';
import CommentRouter from './CommentRouter';

const router: Router = Router();

router.use('/album', AlbumRouter);
router.use('/comment', CommentRouter);

export default router;