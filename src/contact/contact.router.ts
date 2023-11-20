import express from 'express';
import { controller } from './contact.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreateContactDto } from './validators/create-contact.validator';
import { ValidateDeleteContactDto } from './validators/delete-contact.validator';
import { ValidateUpdateContactDto } from './validators/update-contact.validator';
import { ValidateGetById } from '../validators/get-by-id.validator';

const router = express.Router();

router.get('/', controller.GetAll.bind(controller));
router.get('/:id', Validate(ValidateGetById), controller.GetByID.bind(controller));
router.post('/', Validate(ValidateCreateContactDto), controller.Create.bind(controller));
router.delete('/:id', Validate(ValidateDeleteContactDto), controller.Delete.bind(controller));
router.put('/:id', Validate(ValidateUpdateContactDto), controller.Update.bind(controller));

router.delete('/', controller.DeleteAll.bind(controller));

export default router;
