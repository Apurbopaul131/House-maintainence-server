import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { BookingControllers } from './bookings.controller';
import { bookingValidations } from './bookings.validation';

const router = express.Router();

router.post(
  '/bookings/create-booking',
  validateRequest(bookingValidations.createBookingValidationSchema),
  BookingControllers.createServiceBooking,
);
export const BookingsRoutes = router;
