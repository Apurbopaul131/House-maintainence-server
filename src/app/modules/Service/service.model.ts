import { model, Schema } from 'mongoose';
import { IService } from './service.interface';

const serviceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['comercial', 'resedential'],
      default: 'comercial',
    },
    basePrice: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const serviceModel = model<IService>('Service', serviceSchema);
