import { z } from 'zod'

export const ValidateDeleteTodo = z.object({
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
