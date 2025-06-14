import { Types } from 'mongoose';

type TStaus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export interface IBooking {
  email: string;
  message: string;
  date: Date;
  status: TStaus;
  totalPrice: number;
  time: {
    startTime: string;
    endTime: string;
  };
  uploadFile?: string;
  serviceId: Types.ObjectId;
}
