import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import config from '../../config';
import AppError from '../../error/AppError';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
    isBlocked: { type: Boolean, default: false },
    streetAddress: { type: String },
    streetAddressLineTwo: { type: String },
    city: { type: String },
    state: { type: String },
    postal: { type: Number },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  },
);
//This pre-middlewire hook used for convert user password before entry database
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
//This pre-middewire hook is used for prevent to entry duplicate email
userSchema.pre('save', async function (next) {
  const isUserAlreadyExistByEmailId = await User.findOne({ email: this.email });
  if (isUserAlreadyExistByEmailId) {
    throw new AppError(409, `${this.email} is Already exist.`);
  }
  next();
});
//execute post document middlewire to prevent send password to client
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
//Create a statics function that find user by default id
userSchema.statics.checkUserExistById = async function (id) {
  const isUserExist = await this.findById(id);
  return isUserExist;
};
//Create a statics function that check the equality of passwords
userSchema.statics.checkLoginPasswordMatch = async function (
  plainTextPassword,
  hashPassword,
) {
  const match = await bcrypt.compare(plainTextPassword, hashPassword);
  return match;
};
export const User = model<TUser, UserModel>('User', userSchema);
