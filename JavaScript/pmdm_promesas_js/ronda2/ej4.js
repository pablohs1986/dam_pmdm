function arrayStringsToMayusculas(arrayStrings) {
    return new Promise((resolve, reject) => {
        let arrayMayusculas;
        if(!arrayStrings) {
            reject(new Error('El array está vacío'));
        } else {
            arrayMayusculas = arrayStrings.map(palabra => {
                if(typeof palabra !== 'string') {
                    reject(new Error('No es un array de strings.'))
                } else {
                    return palabra.toUpperCase();
                }
            })
        }
        resolve(arrayMayusculas);
    });
}

function ordenarPalabrasDeArray(array) {
    return new Promise((resolve, reject) => {
        if (!array) {
            reject(new Error('No se ha pasado ningún array.'));
        } else {
            array.forEach(palabra => {
                if (typeof palabra !== 'string') {
                    reject(new Error('No se ha pasado un array de palabras.'))
                }    
            });
        }
        resolve(array.sort());
    })
}

let arrayPrueba = ['Yoda', 'Leia', 'Luke'];

arrayStringsToMayusculas(arrayPrueba)
    .then(ordenarPalabrasDeArray)
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(error));