export{}

function arrayStringsToMayusculas(array: string[]) {
    return new Promise((resolve, reject) => {
        if(!array) {
            reject(new Error("No se ha pasado ningún array."));
        } else {
            let arrayTransformado = array.map((palabra: string) => {
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

let arrayNombres: string[] = ['Luke', 'Yoda', 'Leia'];

arrayStringsToMayusculas(arrayNombres)
    .then(array => (console.log(array)))
    .catch(error => console.log(error.message));
