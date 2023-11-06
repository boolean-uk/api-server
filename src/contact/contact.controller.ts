import { UserContactRepository } from './user-contact.repository';
import { Repository } from '../service/repository';
import { Controller } from '../service/controller';

const repo = new Repository<UserContactRepository>(UserContactRepository);

export const controller = new Controller(repo);
