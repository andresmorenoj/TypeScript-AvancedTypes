// common array defination
const prices: (number | string)[] = [1, 2, 3, 4, 5, 'something'];

/**
 * Tuples
 *
 * Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.
 */

const user: [string, number, boolean] = ['username', 123, true];
const [nickname, password] = user;
console.log({ nickname, password });
