import { addProduct } from './productos/product.service';

const add = addProduct({
  id: '1',
  title: 'product 1',
  createdAt: new Date(),
  stock: 90,
  categoria: {
    id: 'category1',
    name: 'category 1'
  }
})
