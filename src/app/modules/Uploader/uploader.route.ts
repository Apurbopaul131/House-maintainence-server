import express from 'express';
import { upload } from '../../uitls/multer';
import { UploadControllers } from './uploader.contoller';

const router = express.Router();

router.post('/upload', upload.single('file'), UploadControllers.uploadImages);

export const UploadRoutes = router;
