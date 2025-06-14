import { model, Schema } from 'mongoose';
import { bookingStatus } from '../User/user.constant';
import { IBooking } from './booings.interface';

const bookingSchema = new Schema<IBooking>(
  {
    email: { type: String, required: true },
    message: { type: String },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: bookingStatus,
      default: 'pending',
    },
    totalPrice: { type: Number, required: true },
    time: {
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    },
    uploadFile: { type: String },
    serviceId: Schema.Types.ObjectId,
  },
  { timestamps: true },
);

export const BookingModel = model<IBooking>('Booking', bookingSchema);
