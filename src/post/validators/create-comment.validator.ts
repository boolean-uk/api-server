import { z } from 'zod';

export const ValidateCreateCommentDto = z.object({
  body: z.object({
    postId: z
      .number({
        required_error: 'postId is required',
        invalid_type_error: 'postId must be a number',
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
