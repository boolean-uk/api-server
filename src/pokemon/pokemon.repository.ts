import { UserPokemonRepository } from './user-pokemon.repository';

export class PokemonRepository {
  private pokemon: Record<string, UserPokemonRepository> = {};

  getUserRepository(username: string): UserPokemonRepository | undefined {
    return this.pokemon[username];
  }

  getOrCreateUserRepository(username: string): UserPokemonRepository {
    const existingRepo = this.getUserRepository(username);
    if (existingRepo) {
      return existingRepo;
    }
    const newRepo = new UserPokemonRepository();
    this.pokemon[username] = newRepo;

    return newRepo;
  }
}