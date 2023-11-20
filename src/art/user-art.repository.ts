import { UserRepository } from '../service/user-repository';
import { CreateArtDto } from './dto/create-art.dto';
import { Art } from './models/art';
import artworks from './data/art.data';

export class UserArtRepository extends UserRepository<Art, CreateArtDto, CreateArtDto> {
  protected data: Art[] = structuredClone(artworks);
  protected id = this.data.length + 1;
    
  create(dto: CreateArtDto): Art {
    throw new Error('method not supported for this entity');
  }
}
