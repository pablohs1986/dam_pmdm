function arrayStringsToMayusculas(array) {
    return new Promise((resolve, reject) => {
        if(!array) {
            reject(new Error("No se ha pasado ningún array."));
        } else {
            let arrayTransformado = array.map(palabra => {
                if(typeof palabra !== 'string') {
                    reject(new Error("No se ha pasado un array de String."));
                } else {
                    return palabra.toUpperCase();
                }
            });
            resolve(arrayTransformado);
        }
    });
}

function ordenarPalabrasFromArray(array) {
    return new Promise((resolve, reject) => {
        if(!array) {
            reject(new Error('No se ha pasado ningún array.'));
        } else {
            // Compruebo que sean strings
            array.forEach(palabra => {
                if(typeof palabra !== 'string') {
                    reject(new Error('No se ha pasado un array de String.'));
                }
            });

            resolve(array.sort());
        }
    })
}

let arrayNumeros = [1, 2];
let arrayCadenas = ['Luke', 'Vader', 'Yoda', 'Anakin'];

// Pruebas
arrayStringsToMayusculas(arrayCadenas)
.then(ordenarPalabrasFromArray) // Se pasa el nombre de la función, funciona porque aplica esa función al resultado del then (el array que se devuelve de arrayStringsToMayusculas)
.then(resultado => console.log(`Resultado: ${resultado}`))
.catch(error => console.log('Error: ' + error.message));

arrayStringsToMayusculas(arrayNumeros)
.then(ordenarPalabrasFromArray)
.then(resultado => console.log(`Resultado: ${resultado}`))
.catch(error => console.log('Error: ' + error.message));