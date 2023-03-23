/*

Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

*/

const wordsArray1 = [ 'pippo', 'PlUTO', 'Paperino'];

console.log(wordsArray1);

const wordsArray2 = wordsArray1.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(wordsArray2);