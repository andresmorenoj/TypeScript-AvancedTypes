import { IBaseModel } from '../base.mode';
import { ICategory } from '../categories/category.model';

export type TSizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct extends IBaseModel {
  title: string;
  stock: number;
  categoria: ICategory;
  size?: TSizes
}
