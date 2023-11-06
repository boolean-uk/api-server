import express from 'express';
import { CreateContact, DeleteContact, GetAllContacts, GetContactByID, UpdateContact } from './contact.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreateContactDto } from './validators/create-contact.validator';
import { ValidateDeleteContactDto } from './validators/delete-contact.validator';
import { ValidateUpdateContactDto } from './validators/update-contact.validator';
import { ValidateGetById } from '../validators/get-by-id.validator';

const router = express.Router();

router.get('/', GetAllContacts);
router.get('/:id', Validate(ValidateGetById), GetContactByID);
router.post('/', Validate(ValidateCreateContactDto), CreateContact);
router.delete('/:id', Validate(ValidateDeleteContactDto), DeleteContact);
router.put('/:id', Validate(ValidateUpdateContactDto), UpdateContact);

export default router;
