import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { BookingServices } from './bookings.service';

const createServiceBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createServiceBookingIntoDB(req?.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Booking Confirmed',
    statusCode: 201,
    data: result,
  });
});
export const BookingControllers = {
  createServiceBooking,
};
