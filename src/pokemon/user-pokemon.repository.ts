import { Pokemon } from './models/pokemon';
import starterPokemon from './data/pokemon.data';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

export class UserPokemonRepository {
  private pokemon: Pokemon[] = structuredClone(starterPokemon);
  private pokemonId = this.pokemon.length + 1;

  getAllPokemon(): Pokemon[] {
    return this.pokemon;
  }

  createPokemon(dto: CreatePokemonDto): Pokemon {
    const pokemon = {
      ...dto,
      id: this.pokemonId++
    };
    this.pokemon.push(pokemon);
    return pokemon;
  }

  deletePokemon(id: number): Pokemon | undefined {
    const index = this.pokemon.findIndex((pokemon) => pokemon.id === id);
    if (index === -1) {
      return undefined;
    }
    const pokemon = this.pokemon.splice(index, 1);
    return pokemon[0];
  }

  updatePokemon(id: number, dto: CreatePokemonDto): Pokemon | undefined {
    const pokemon = this.pokemon.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      return pokemon;
    }
    Object.assign(pokemon, dto);
    
    return pokemon;
  }
}