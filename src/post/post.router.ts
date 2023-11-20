import express, { Response } from 'express';
import { controller } from './post.controller';
import { Validate } from '../middleware/validate';
import { ValidateGetById } from '../validators/get-by-id.validator';
import { ValidateCreatePostDto } from './validators/create-post.validator';
import { commentController } from './comment.controller';
import { Context } from '../middleware/context';
import { ValidateCreateCommentDto } from './validators/create-comment.validator';

const router = express.Router();

router.get('/', controller.GetAll.bind(controller));
router.get('/:id', Validate(ValidateGetById), controller.GetByID.bind(controller));
router.post('/', Validate(ValidateCreatePostDto), controller.Create.bind(controller));
router.delete('/:id', Validate(ValidateGetById), controller.Delete.bind(controller));
router.put('/:id', Validate(ValidateCreatePostDto), controller.Update.bind(controller));
router.delete('/', controller.ClearData.bind(controller));

router.get('/:id/comment', (req: Context, res: Response) => commentController.GetAllByFilter('postId', Number(req.params.id), req, res));
router.post('/:id/comment', Validate(ValidateCreateCommentDto), commentController.Create.bind(commentController));
router.put('/:postId/comment/:id', Validate(ValidateCreateCommentDto), commentController.Update.bind(commentController));
router.delete('/:postId/comment/:id', commentController.Delete.bind(commentController));
router.delete('/:postId/comment', commentController.ClearData.bind(controller));

export default router;
