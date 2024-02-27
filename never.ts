/**
 * Never
 *
 * El never type se usa para funciones que nunca van a terminar o que detienen el programa. Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos un mensaje de error.
 */

const withOutEnd = () => {
  while (true) {
    console.log('Never ends');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'Is string'
  } else if (Array.isArray(input)) {
    return 'is Array'
  } else {
    return fail('not match')
  }
}

console.log(example('Hello'));
console.log(example([1,3,4]));
console.log(example(1));
console.log('After fail');
