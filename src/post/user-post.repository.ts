import { UserRepository } from '../service/user-repository';
import { createPosts } from './data/create';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './models/post';

export class UserPostRepository extends UserRepository<Post, CreatePostDto, CreatePostDto> {
  constructor() {
    super();
    this.data = createPosts(10);
    this.id = this.data.length + 1;
  }
    
  create(dto: CreatePostDto): Post {
    const post = {
      ...dto,
      id: this.id++
    };
    this.data.push(post);
    return post;
  }
}