import { z } from 'zod';

export const createServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    category: z.enum(['comercial', 'Resedential'], {
      required_error: 'Category is required',
      invalid_type_error:
        'Category must be either "comercial" or "Resedential"',
    }),
    basePrice: z.string().min(1, { message: 'Base price is required' }),
    imageUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
    isDeleted: z.boolean().optional(),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
};
