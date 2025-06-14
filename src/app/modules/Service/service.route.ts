import express from 'express';
import validateRequest from '../../middlewires/validateRequest';

import auth from '../../middlewires/auth';
import { USER_ROLE } from '../User/user.constant';
import { ServiceControllers } from './service.controller';
import { ServiceValidations } from './service.validation';

const router = express.Router();

router.post(
  '/services',
  validateRequest(ServiceValidations.createServiceValidationSchema),
  auth(USER_ROLE?.admin),
  ServiceControllers.createService,
);
export const HomeServiceRoutes = router;
