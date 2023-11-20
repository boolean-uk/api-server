import express, { Response } from 'express';
import { Context } from '../middleware/context';
import { controller as contactController } from '../contact/contact.controller';
import { controller as todoController } from '../todo/todo.controller';
import { controller as pokemonController } from '../pokemon/pokemon.controller';
import { controller as postController } from '../post/post.controller';
import { commentController } from '../post/comment.controller';
import { Teacher } from '../middleware/teacher.middleware';

const router = express.Router();

router.delete('/', (req: Context, res: Response) => {
  contactController.ClearDataForUsername(req);
  todoController.ClearDataForUsername(req);
  pokemonController.ClearDataForUsername(req);
  postController.ClearDataForUsername(req);
  commentController.ClearDataForUsername(req);

  res.status(200).json({ message: 'data cleared' });
});

router.delete('/teacher', Teacher, (req: Context, res: Response) => {
  contactController.ClearAllData();
  todoController.ClearAllData();
  pokemonController.ClearAllData();
  postController.ClearAllData();
  commentController.ClearAllData();
  
  res.status(200).json({ message: 'data cleared' });
});

export default router;