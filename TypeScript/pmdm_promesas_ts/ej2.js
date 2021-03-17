"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayStringsToMayusculas(array) {
    return new Promise(function (resolve, reject) {
        if (!array) {
            reject(new Error("No se ha pasado ningún array."));
        }
        else {
            var arrayTransformado = array.map(function (palabra) {
                if (typeof palabra !== 'string') {
                    reject(new Error("No se ha pasado un array de String."));
                }
                else {
                    return palabra.toUpperCase();
                }
            });
            resolve(arrayTransformado);
        }
    });
}
var arrayNombres = ['Luke', 'Yoda', 'Leia'];
arrayStringsToMayusculas(arrayNombres)
    .then(function (array) { return (console.log(array)); })
    .catch(function (error) { return console.log(error.message); });
