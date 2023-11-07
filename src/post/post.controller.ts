import { UserPostRepository } from './user-post.repository';
import { Repository } from '../service/repository';
import { Controller } from '../service/controller';

const repo = new Repository<UserPostRepository>(UserPostRepository);

export const controller = new Controller(repo);
