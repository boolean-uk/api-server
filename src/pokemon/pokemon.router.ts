import express from 'express';
import { controller } from './pokemon.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreatePokemonDto } from './validators/create-pokemon.validator';
import { ValidateDeletePokemon } from './validators/delete-pokemon.validator';
import { ValidateUpdatePokemonDto } from './validators/update-pokemon.validator';

const router = express.Router();

router.get('/', controller.GetAll.bind(controller));
router.post('/', Validate(ValidateCreatePokemonDto), controller.Create.bind(controller));
router.delete('/:id', Validate(ValidateDeletePokemon), controller.Delete.bind(controller));
router.put('/:id', Validate(ValidateUpdatePokemonDto), controller.Update.bind(controller));

router.delete('/', controller.DeleteAll.bind(controller));

export default router;
