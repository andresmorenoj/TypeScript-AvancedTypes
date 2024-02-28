import { IProduct } from "./producto.model";

export const products: IProduct[] = [];

export const addProduct = (data: IProduct) => {
  products.push(data);
}
