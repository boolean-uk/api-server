import { Context } from '../middleware/context';
import { Repository } from './repository';
import { UserRepository } from './user-repository';
import { Identity } from './identity';
import { Response } from 'express';

export class Controller<T extends Identity, CreateDto, UpdateDto> {
  protected repository;

  constructor(repository: Repository<UserRepository<T, CreateDto, UpdateDto>>) {
    this.repository = repository;
  }
    
  protected getRepoFromUsername(req: Context): UserRepository<T, CreateDto, UpdateDto> {
    const username = req.context?.username || '';
    return this.repository.getOrCreateUserRepository(username);
  }

  GetAll(req: Context, res: Response) {
    const data = this.getRepoFromUsername(req).getAll();
        
    return res.status(200).json(data);
  }

  GetAllByFilter(property: string, value: any, req: Context, res: Response) {
    const data = this.getRepoFromUsername(req).getAllByFilter(property, value);
    return res.status(200).json(data);
  }

  GetByID(req: Context, res: Response) {
    const id = Number(req.params.id);
    const data = this.getRepoFromUsername(req).getById(id);
    if (!data) {
      return res.status(404).json({ error: 'entity not found' });
    }
    return res.status(200).json(data);
  }

  Create(req: Context, res: Response) {
    const dto: CreateDto = req.body;
    const data = this.getRepoFromUsername(req).create(dto);
    return res.status(201).json(data);
  }

  Delete(req: Context, res: Response) {
    const id = Number(req.params.id);
    const data = this.getRepoFromUsername(req).delete(id);
    if (!data) {
      return res.status(404).json({ error: 'entity not found' });
    }
    return res.status(200).json(data);
  }

  Update(req: Context, res: Response) {
    const id = Number(req.params.id);
    const dto: UpdateDto = req.body;
    const data = this.getRepoFromUsername(req).update(id, dto);
    if (!data) {
      return res.status(404).json({ error: 'entity not found' });
    }
          
    return res.status(200).json(data);
  }

  DeleteAll(req: Context, res: Response) {
    const cleared = this.ClearDataForUsername(req);

    if (!cleared) {
      return res.status(400).json({ error: 'no data to clear' });
    }

    return res.status(200).json({ message: 'data cleared' });
  }

  ClearDataForUsername(req: Context): boolean {
    const username = req.context?.username || null;

    if (!username) {
      return false;
    }

    this.repository.clearUserRepository(username);

    return true;
  }

  ClearAllData() {
    this.repository.clearAllRepositories();
  }
}