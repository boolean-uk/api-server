import { Response } from 'express';
import { Context } from '../middleware/context';
import { UserPokemonRepository } from './user-pokemon.repository';
import { PokemonRepository } from './pokemon.repository';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

const repo = new PokemonRepository();

const getRepoFromUsername = (req: Context): UserPokemonRepository => {
  const username = req.context?.username || '';
  return repo.getOrCreateUserRepository(username);
};

export const GetAllPokemon = (req: Context, res: Response) => {
  const pokemonRepo = getRepoFromUsername(req);
  
  const pokemon = pokemonRepo.getAllPokemon();
  
  return res.status(200).json(pokemon);
};

export const CreatePokemon = (req: Context, res: Response) => {
  const dto: CreatePokemonDto = req.body;
  const pokemonRepo = getRepoFromUsername(req);

  const pokemon = pokemonRepo.createPokemon(dto);

  return res.status(201).json(pokemon);
};

export const DeletePokemon = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const pokemonRepo = getRepoFromUsername(req);
  
  const pokemon = pokemonRepo.deletePokemon(id);
  if (!pokemon) {
    return res.status(404).json({ error: 'pokemon not found' });
  }
  
  return res.status(200).json(pokemon);
};

export const UpdatePokemon = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const dto: CreatePokemonDto = req.body;
  const pokemonRepo = getRepoFromUsername(req);
  
  const pokemon = pokemonRepo.updatePokemon(id, dto);
  if (!pokemon) {
    return res.status(404).json({ error: 'pokemon not found' });
  }
  
  return res.status(200).json(pokemon);
};