import { IBaseModel } from '../base.mode';
import { IProduct } from '../productos/producto.model';
import { IUser } from '../users/user.model';

export interface IOrder extends IBaseModel{
  products: IProduct[];
  user: IUser
}
