export const VERSION = "1.0";
export default function init() {
 console.log("Initialisation, version " + VERSION);
}
// fichier : main.js
import init, { VERSION } from './module.js';
console.log(VERSION); // "1.0"
init(); // "Initialisation, version 1.0"