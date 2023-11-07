import { z } from 'zod';

export const ValidateCreatePostDto = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'title is required',
        invalid_type_error: 'title must be a string',
      }),
    content: z
      .string({
        required_error: 'content is required',
        invalid_type_error: 'content must be a string',
      }),
    contactId: z
      .number({
        required_error: 'contactId is required',
        invalid_type_error: 'contactId must be a number',
      }),
  }),
});
