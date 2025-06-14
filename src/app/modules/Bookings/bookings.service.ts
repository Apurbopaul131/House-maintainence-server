import AppError from '../../error/AppError';
import { User } from '../User/user.model';
import { BookingModel } from './bookings.model';

const createServiceBookingIntoDB = async (userId: string, payload: any) => {
  console.log(payload);
  const {
    name,
    streetAddress,
    streetAddressLineTwo,
    city,
    state,
    postal,
    ...bookingData
  } = payload;
  console.log(bookingData);
  console.log(userId);
  const existUser = await User.findById(userId);
  if (!existUser) {
    throw new AppError(403, 'user not exist');
  }
  await User.findByIdAndUpdate(userId, {
    name,
    streetAddress,
    streetAddressLineTwo,
    city,
    state,
    postal,
  });
  const booingsResult = await BookingModel.create(bookingData);
  return booingsResult;
};
export const BookingServices = {
  createServiceBookingIntoDB,
};
