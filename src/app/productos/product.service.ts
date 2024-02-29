import { faker } from '@faker-js/faker';

import { IProduct } from './producto.model';
import { ICreatedProductoDto } from './product.dto';

export const products: IProduct[] = [];

export const addProduct = (data: ICreatedProductoDto): IProduct => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);

  return newProduct
};

export const updateProduct = (id: string, changes: IProduct) => {};
