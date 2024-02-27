export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  };
};

const product1 = createProduct(1, true, 12);
console.log(product1);

const product2 = createProduct(2);
console.log(product2);

const product3 = createProduct('3', false, 0);
console.log(product3);
