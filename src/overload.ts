// nombre => [n, o, m, b, r, e] // string => string[]
// [n, o, m, b, r, e] => nombre // string[] => string

/**
 *  Overload
 */
function parseString(input: string): string[];
function parseString(input: string[]): string;
function parseString(input: number): boolean;
//////////////////

function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true
  }
}

const rtaArray = parseString('nombre');

// With Overload
rtaArray.reverse();

/**
 * Wihtout Overload

if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
 */
console.log(rtaArray);

const rtaString = parseString(['n', 'o', 'm', 'b', 'r', 'e']);
rtaString.toUpperCase();
/**
 * Wihtout Overload

if(typeof rtaString === 'string') {
  rtaString.toUpperCase()
}
 */
console.log(rtaString);
