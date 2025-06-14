import { IService } from './service.interface';
import { serviceModel } from './service.model';

const createServiceIntoDB = async (payload: IService) => {
  const result = await serviceModel.create(payload);
  return result;
};
export const homeServices = {
  createServiceIntoDB,
};
