import express from 'express';
import auth from '../../middlewires/auth';
import validateRequest from '../../middlewires/validateRequest';
import { USER_ROLE } from '../User/user.constant';
import { BookingControllers } from './bookings.controller';
import { bookingValidations } from './bookings.validation';

const router = express.Router();

router.post(
  '/bookings/create-booking',
  auth(USER_ROLE?.customer),
  validateRequest(bookingValidations.createBookingValidationSchema),
  BookingControllers.createServiceBooking,
);
export const BookingsRoutes = router;
