import { UserCommentRepository } from './user-comment.repository';
import { Repository } from '../service/repository';
import { Controller } from '../service/controller';

const repo = new Repository<UserCommentRepository>(UserCommentRepository);

export const commentController = new Controller(repo);
