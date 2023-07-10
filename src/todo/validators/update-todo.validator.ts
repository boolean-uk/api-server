import { z } from 'zod'

export const ValidateUpdateTodoDto = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'title must be a string',
    }),
    completed: z.boolean({
      required_error: 'completed is required',
      invalid_type_error: 'completed must be a boolean',
    }),
  }),
  params: z.object({
    id: z.preprocess(
      (a) => Number(z.string().parse(a)),
      z.number({
        required_error: 'todo id is required',
        invalid_type_error: 'id must be a number',
      }),
    ),
  }),
})
