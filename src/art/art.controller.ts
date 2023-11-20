import { Repository } from '../service/repository';
import { Controller } from '../service/controller';
import { UserArtRepository } from './user-art.repository';

const repo = new Repository<UserArtRepository>(UserArtRepository);

export const controller = new Controller(repo);