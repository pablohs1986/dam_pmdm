export{}

function ordenarPalabrasFromArray(array: string[]) {
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
let arrayNombres = ['Luke', 'Vader', 'Yoda', 'Anakin'];

ordenarPalabrasFromArray(arrayNombres)
    .then(array => {console.log(array)})
    .catch(error => console.log(error.message));