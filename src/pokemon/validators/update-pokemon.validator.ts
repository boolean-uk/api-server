import { z } from 'zod';

export const ValidateUpdatePokemonDto = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'name is required',
        invalid_type_error: 'name must be a string',
      }),
    image: z
      .string({
        required_error: 'image is required',
        invalid_type_error: 'image must be a string'
      })
      .url('image must be a url'),
    liked: z
      .boolean({
        required_error: 'liked is required',
        invalid_type_error: 'liked must be a boolean'
      })
  }),
  params: z.object({
    id: z.preprocess(
      (a) => Number(z.string().parse(a)),
      z.number({
        required_error: 'pokemon id is required',
        invalid_type_error: 'id must be a number',
      }),
    ),
  }),
});
