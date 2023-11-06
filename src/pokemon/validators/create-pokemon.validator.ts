import { z } from 'zod';

export const ValidateCreatePokemonDto = z.object({
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
});
