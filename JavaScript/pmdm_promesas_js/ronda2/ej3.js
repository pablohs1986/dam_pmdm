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

ordenarPalabrasDeArray(arrayPrueba)
    .then(resolve => console.log(resolve))
    .catch(resolve => console.log(error));