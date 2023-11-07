import { UserRepository } from '../service/user-repository';
import { createComments } from './data/create';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './models/comment';

export class UserCommentRepository extends UserRepository<Comment, CreateCommentDto, CreateCommentDto> {
  constructor() {
    super();
    this.data = createComments(60);
    this.id = this.data.length + 1;
  }
    
  create(dto: CreateCommentDto): Comment {
    const comment = {
      ...dto,
      id: this.id++
    };
    this.data.push(comment);
    return comment;
  }
}
