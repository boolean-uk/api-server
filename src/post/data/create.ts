import { faker } from '@faker-js/faker';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

const getRandomId = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createPost = (id: number): Post => {
  return {
    id,
    contactId: getRandomId(1, 15),
    title: faker.lorem.sentence({ min: 3, max: 7 }),
    content: faker.lorem.paragraph({ min: 3, max: 7 })
  };
};

export const createComment = (id: number): Comment => {
  return {
    id,
    postId: getRandomId(1, 10),
    contactId: getRandomId(1, 15),
    content: faker.lorem.sentence({ min: 1, max: 10 })
  };
};

export const createPosts = (length = 10): Post[] => {
  let id = 1;
  return Array.from({ length }, () => createPost(id++));
};

export const createComments = (length = 30): Comment[] => {
  let id = 1;
  return Array.from({ length }, () => createComment(id++));
};
