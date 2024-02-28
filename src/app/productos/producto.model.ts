import { ICategory } from '../categories/category.model';

export type TSizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  categoria: ICategory;
  size?: TSizes
}
