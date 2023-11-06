import { Pokemon } from './models/pokemon';
import starterPokemon from './data/pokemon.data';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UserRepository } from '../service/user-repository';

export class UserPokemonRepository extends UserRepository<Pokemon, CreatePokemonDto, CreatePokemonDto> {
  protected data: Pokemon[] = structuredClone(starterPokemon);
  protected id = this.data.length + 1;

  create(dto: CreatePokemonDto): Pokemon {
    const pokemon = {
      ...dto,
      id: this.id++
    };
    this.data.push(pokemon);
    return pokemon;
  }
}