"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function esMayorEdad(edad) {
    return new Promise(function (resolve, reject) {
        if (edad >= 18)
            resolve(true);
        else
            reject(false);
    });
}
esMayorEdad(18)
    .then(function (resultado) { return console.log("Mayor de edad"); })
    .catch(function (resultado) { return console.log("Menor de edad"); });
