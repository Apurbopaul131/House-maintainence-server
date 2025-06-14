import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { UploadServices } from './uploder.service';

const uploadImages = catchAsync(async (req: any, res: any) => {
  const imageUrls = await UploadServices.uploadImages(req);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Images uploaded successfully',
    data: imageUrls,
  });
});

export const UploadControllers = {
  uploadImages,
};
