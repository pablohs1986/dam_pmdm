"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ordenarPalabrasFromArray(array) {
    return new Promise(function (resolve, reject) {
        if (!array) {
            reject(new Error('No se ha pasado ningún array.'));
        }
        else {
            // Compruebo que sean strings
            array.forEach(function (palabra) {
                if (typeof palabra !== 'string') {
                    reject(new Error('No se ha pasado un array de String.'));
                }
            });
            resolve(array.sort());
        }
    });
}
var arrayNumeros = [1, 2];
var arrayNombres = ['Luke', 'Vader', 'Yoda', 'Anakin'];
ordenarPalabrasFromArray(arrayNombres)
    .then(function (array) { console.log(array); })
    .catch(function (error) { return console.log(error.message); });
