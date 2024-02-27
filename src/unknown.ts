/**
 * Unknown type
 *
 * El unknown type nos indica que una variable es de un tipo de dato desconocido. Es similar a any, pero sin quitar el análisis de código estático que nos brinda TypeScript.
 */

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = 'Hi';
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();
if(typeof unknownVar === 'string')
  unknownVar.toUpperCase();
