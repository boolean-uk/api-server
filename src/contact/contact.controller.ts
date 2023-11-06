import { Response } from 'express';
import { Context } from '../middleware/context';
import { UserContactRepository } from './user-contact.repository';
import { Repository } from '../service/repository';
import { CreateContactDto } from './dto/create-contact.dto';

const repo = new Repository<UserContactRepository>(UserContactRepository);

const getRepoFromUsername = (req: Context): UserContactRepository => {
  const username = req.context?.username || '';
  return repo.getOrCreateUserRepository(username);
};

export const GetAllContacts = (req: Context, res: Response) => {
  const contactRepo = getRepoFromUsername(req);
  const contacts = contactRepo.getAll();
  
  return res.status(200).json(contacts);
};

export const GetContactByID = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const contactRepo = getRepoFromUsername(req);
  
  const contact = contactRepo.getById(id);
  if (!contact) {
    return res.status(404).json({ error: 'contact not found' });
  }
  return res.status(200).json(contact);
};

export const CreateContact = (req: Context, res: Response) => {
  const dto: CreateContactDto = req.body;
  const contactRepo = getRepoFromUsername(req);
  
  const contact = contactRepo.create(dto);
  
  return res.status(201).json(contact);
};

export const DeleteContact = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const contactRepo = getRepoFromUsername(req);
    
  const contact = contactRepo.delete(id);
  if (!contact) {
    return res.status(404).json({ error: 'contact not found' });
  }
    
  return res.status(200).json(contact);
};

export const UpdateContact = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const dto: CreateContactDto = req.body;
  const contactRepo = getRepoFromUsername(req);
    
  const contact = contactRepo.update(id, dto);
  if (!contact) {
    return res.status(404).json({ error: 'contact not found' });
  }
    
  return res.status(200).json(contact);
};
