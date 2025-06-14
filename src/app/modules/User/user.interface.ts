/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TPlanType = 'member' | 'premium' | null;
export type TPaymentFrequency = 'monthly' | 'yearly' | null;
export type TSubscriptionStatus = 'pending' | 'completed' | 'rejected' | null;

export interface ISubscription {
  isActive: boolean;
  planType: TPlanType;
  paymentFrequency: TPaymentFrequency;
  subscriptionStaus: TSubscriptionStatus;
  nextBillingDate?: string;
  stripeCustomerId?: string;
  subscriptionId?: string;
  startDate?: Date;
  endDate?: Date;
}
export type TRole = 'admin' | 'customer';
export interface TUser {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  role?: TRole;
  isBlocked?: boolean;
  streetAddress?: string;
  streetAddressLineTwo?: string;
  city?: string;
  state?: string;
  postal?: number;
  phoneNumber?: string;
  subscription?: ISubscription;
}
export type TUserRole = keyof typeof USER_ROLE;
export interface UserModel extends Model<TUser> {
  checkUserExistById(id: string): Promise<TUser>;
  checkLoginPasswordMatch(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}
