
//Importation des exports nommés (avec des accolades, et les noms doivent correspondre) :

// fichier : main.js
import { PI, additionner, soustraire } from './mathUtils.js';
console.log(additionner(2, 3)); // 5
console.log(PI); // 3.14159
// Renommer un import
import { additionner as plus } from './mathUtils.js';
console.log(plus(1, 1)); // 2
