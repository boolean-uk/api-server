import { controller as contactController } from '../contact/contact.controller';
import { controller as todoController } from '../todo/todo.controller';
import { controller as pokemonController } from '../pokemon/pokemon.controller';
import { controller as postController } from '../post/post.controller';
import { commentController } from '../post/comment.controller';

export default function clearAllData() {
  contactController.ClearAllData();
  todoController.ClearAllData();
  pokemonController.ClearAllData();
  postController.ClearAllData();
  commentController.ClearAllData();
}
