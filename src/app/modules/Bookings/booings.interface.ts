import { Types } from 'mongoose';

type TStaus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export interface IBooking {
  name: {
    firstName: string;
    lastName: string;
  };
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postal: string;
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
