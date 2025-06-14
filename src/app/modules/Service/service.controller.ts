import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { homeServices } from './homeService.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await homeServices.createServiceIntoDB(req?.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Booking created successfully',
    statusCode: 201,
    data: result,
  });
});
export const ServiceControllers = {
  createService,
};
