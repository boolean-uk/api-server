import express, { Response } from 'express';
import { Context } from '../middleware/context';
import { controller as contactController } from '../contact/contact.controller';
import { controller as todoController } from '../todo/todo.controller';
import { controller as pokemonController } from '../pokemon/pokemon.controller';
import { controller as postController } from '../post/post.controller';
import { commentController } from '../post/comment.controller';

const router = express.Router();

router.delete('/', (req: Context, res: Response) => {
  contactController.ClearData(req);
  todoController.ClearData(req);
  pokemonController.ClearData(req);
  postController.ClearData(req);
  commentController.ClearData(req);

  res.status(200).json({ message: 'data cleared' });
});

export default router;