import { z } from 'zod';

export const ValidateUpdateContactDto = z.object({
  body: z.object({
    firstName: z
      .string({
        required_error: 'firstName is required',
        invalid_type_error: 'firstName must be a string',
      }),
    lastName: z
      .string({
        required_error: 'lastName is required',
        invalid_type_error: 'lastName must be a string',
      }),
    gender: z
      .optional(z
        .string({
          invalid_type_error: 'gender must be a string',
        })
      ),
    email: z
      .optional(z
        .string({
          invalid_type_error: 'email must be a string',
        }),
      ),
    street: z
      .string({
        required_error: 'street is required',
        invalid_type_error: 'street must be a string',
      }),
    city: z
      .string({
        required_error: 'city is required',
        invalid_type_error: 'city must be a string',
      }),
    latitude: z
      .optional(z
        .number({
          invalid_type_error: 'latitude must be a number',
        }),
      ),
    longitude: z
      .optional(z
        .number({
          invalid_type_error: 'longitude must be a number',
        }),
      ),
    jobTitle: z
      .optional(z
        .string({
          invalid_type_error: 'jobTitle must be a string',
        }),
      )
  }),
  params: z.object({
    id: z.preprocess(
      (a) => Number(z.string().parse(a)),
      z.number({
        required_error: 'contact id is required',
        invalid_type_error: 'id must be a number',
      }),
    ),
  }),
});
