import { faker } from '@faker-js/faker';

import { IProduct } from './producto.model';
import { ICreatedProductoDto, IUpdateProductDto } from './product.dto';

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

export const updateProduct = (id: string, changes: IUpdateProductDto): IProduct => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index];
};
