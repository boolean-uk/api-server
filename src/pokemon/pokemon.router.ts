import express from 'express';
import { GetAllPokemon, CreatePokemon, DeletePokemon, UpdatePokemon } from './pokemon.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreatePokemonDto } from './validators/create-pokemon.validator';
import { ValidateDeletePokemon } from './validators/delete-pokemon.validator';
import { ValidateUpdatePokemonDto } from './validators/update-pokemon.validator';

const router = express.Router();

router.get('/', GetAllPokemon);
router.post('/', Validate(ValidateCreatePokemonDto), CreatePokemon);
router.delete('/:id', Validate(ValidateDeletePokemon), DeletePokemon);
router.put('/:id', Validate(ValidateUpdatePokemonDto), UpdatePokemon);

export default router;
