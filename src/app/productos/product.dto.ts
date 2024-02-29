import { IProduct } from "./producto.model";

export interface ICreatedProductDto extends Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface IUpdateProductDto extends Partial<ICreatedProductDto>{};

export interface IFindProducts extends Readonly<Partial<Omit<IProduct, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
};
