import { z } from 'zod';
import { role } from './user.constant';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z
        .string({
          required_error: 'First name is required',
          invalid_type_error: 'First name must be a string',
        })
        .min(1, 'First name is required'),
      lastName: z
        .string({
          required_error: 'Last name is required',
          invalid_type_error: 'Last name must be a string',
        })
        .min(1, 'Last name is required'),
    }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be string',
      })
      .email({ message: 'Invalid email address' }),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be string',
      })
      .min(8, { message: 'Must be 8 or more characters long' }),
    role: z
      .enum([...role] as [string, ...string[]], {
        message: 'Role must be admin | customer',
      })
      .optional(),
    isBlocked: z
      .boolean({
        invalid_type_error: 'isBlocked must be boolean',
      })
      .optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
