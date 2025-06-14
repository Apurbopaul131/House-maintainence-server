export type TServiceCategory = 'comercial' | 'Resedential';

export interface IService {
  title: string;
  description: string;
  category: TServiceCategory; // Optional if default is applied
  basePrice: string;
  imageUrl: string;
  isDeleted?: true;
}
