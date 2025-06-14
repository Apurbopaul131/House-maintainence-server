import AppError from '../../error/AppError';
import { uploadImageToSpaces } from '../../uitls/uploadImages';

const uploadImages = async (req: any) => {
  console.log(req.file);
  if (!req.file) {
    throw new AppError(403, 'No files uploaded');
  }

  const imageUrl = await uploadImageToSpaces(req.file);
  return imageUrl;
};

export const UploadServices = {
  uploadImages,
};
