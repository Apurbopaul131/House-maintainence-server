import mongoose from 'mongoose';
import { z } from 'zod';
import { bookingStatus } from '../User/user.constant';

const createBookingValidationSchema = z.object({
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
    streetAddress: z
      .string({
        required_error: 'Street address is required',
        invalid_type_error: 'Street address must be a string',
      })
      .min(1, 'Street address is required'),

    streetAddress2: z
      .string({
        invalid_type_error: 'Street address line 2 must be a string',
      })
      .optional(),

    city: z
      .string({
        required_error: 'City is required',
        invalid_type_error: 'City must be a string',
      })
      .min(1, 'City is required'),

    state: z
      .string({
        required_error: 'State is required',
        invalid_type_error: 'State must be a string',
      })
      .min(1, 'State is required'),

    postal: z
      .string({
        required_error: 'Postal code is required',
        invalid_type_error: 'Postal code must be a string',
      })
      .min(1, 'Postal code is required'),

    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .email('Invalid email address'),

    message: z
      .string({
        invalid_type_error: 'Message must be a string',
      })
      .optional(),

    date: z.coerce.date({
      required_error: 'Date is required',
      invalid_type_error: 'Date must be a valid date',
    }),
    status: z.enum(bookingStatus as [string, ...string[]]).optional(),
    totalPrice: z.number({
      required_error: 'total price is required',
      invalid_type_error: 'total price must be number',
    }),
    time: z.object({
      startTime: z
        .string({
          required_error: 'Start time is required',
          invalid_type_error: 'Start time must be a string',
        })
        .min(1, 'Start time is required'),

      endTime: z
        .string({
          required_error: 'End time is required',
          invalid_type_error: 'End time must be a string',
        })
        .min(1, 'End time is required'),
    }),
    uploadFile: z.string({
      invalid_type_error: 'Upload file must be string',
    }),
    serviceId: z.string().refine(
      (val) => {
        return mongoose.isValidObjectId(val);
      },
      {
        message: 'Invalid service id',
      },
    ),
  }),
});
export const bookingValidations = {
  createBookingValidationSchema,
};
