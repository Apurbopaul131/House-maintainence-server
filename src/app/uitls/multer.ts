import multer from 'multer';

// Configure Multer to store files in memory
export const upload = multer({
  storage: multer.memoryStorage(), // Store the file buffer in memory
  limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 5 MB
});
