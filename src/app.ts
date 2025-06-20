import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewires/globalError';
import notFound from './app/middlewires/notFound';

import { AuthRoutes } from './app/modules/Auth/auth.route';
import { BookingsRoutes } from './app/modules/Bookings/bookings.route';
import { HomeServiceRoutes } from './app/modules/Service/service.route';
import { UploadRoutes } from './app/modules/Uploader/uploader.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Auth Route
app.use('/api/v1', AuthRoutes);
//Booking routes
app.use('/api/v1', BookingsRoutes);
//serviceApi
app.use('/api/v1', HomeServiceRoutes);
app.use('/api/v1', UploadRoutes);
//checking route
app.get('/', (req: Request, res: Response) => {
  res.send('Connected successfully.');
});

//global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app;
