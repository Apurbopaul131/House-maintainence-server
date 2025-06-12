import { model, Schema } from 'mongoose';
import { bookingStatus } from '../User/user.constant';
import { IBooking } from './booings.interface';

const bookingSchema = new Schema<IBooking>(
  {
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    streetAddress: { type: String, required: true },
    streetAddress2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal: { type: String, required: true },
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
