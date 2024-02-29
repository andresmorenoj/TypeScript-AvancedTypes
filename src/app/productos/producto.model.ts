import { IBaseModel } from '../base.mode';
import { ICategory } from '../categories/category.model';

export type TSizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct extends IBaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  category: ICategory;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  size?: TSizes
}
