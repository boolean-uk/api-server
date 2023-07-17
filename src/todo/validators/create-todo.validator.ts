import { z } from 'zod';

export const ValidateCreateTodoDto = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'title is required',
        invalid_type_error: 'title must be a string',
      })
      .min(3, 'title must be at least 3 characters long'),
  }),
});
