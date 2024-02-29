import { IProduct } from "./producto.model";

export interface ICreatedProductoDto extends Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface IUpdateProductDto extends Partial<ICreatedProductoDto>{};
