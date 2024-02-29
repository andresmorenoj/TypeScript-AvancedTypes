import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './productos/product.service';

for(let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.rgb(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    stock: faker.number.int(),
    tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3', 'tag4', 'tag5']),
    categoryId: faker.string.uuid()
  })
}

console.log(products);

const product = products[0]
updateProduct(product.id, {
  title: 'New title',
  price: 100,
})

findProducts({
  stock: 10,
  isNew: false
})
