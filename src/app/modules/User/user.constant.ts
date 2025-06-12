export const role = ['admin', 'customer'];
export const bookingStatus = ['pending', 'confirmed', 'completed', 'cancelled'];
export const USER_ROLE = {
  customer: 'customer',
  admin: 'admin',
} as const;
export type TUserRole = keyof typeof USER_ROLE;
