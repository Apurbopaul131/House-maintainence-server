import { User } from '../User/user.model';
import { IBooking } from './booings.interface';
import { BookingModel } from './bookings.model';

const createServiceBookingIntoDB = async (payload: IBooking) => {
  const isUserExist = await User.findOne({ email: payload?.email });
  if (!isUserExist) {
    const userData = {
      name: {
        firstName: payload?.name?.firstName,
        lastName: payload?.name?.lastName,
      },
      email: payload?.email,
      password: '12345678',
    };
    await User.create(userData);
  }
  const result = await BookingModel.create(payload);
  return result;
};
export const BookingServices = {
  createServiceBookingIntoDB,
};
