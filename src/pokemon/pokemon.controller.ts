import { UserPokemonRepository } from './user-pokemon.repository';
import { Repository } from '../service/repository';
import { Controller } from '../service/controller';

const repo = new Repository<UserPokemonRepository>(UserPokemonRepository);

export const controller = new Controller(repo);
