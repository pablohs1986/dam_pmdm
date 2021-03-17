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

let arrayNumeros = [1, 2];
let arrayCadenas = ['Luke', 'Vader', 'Yoda'];

arrayStringsToMayusculas(arrayCadenas)
    .then(array => {console.log(array)})
    .catch(error => console.log(error.message));
