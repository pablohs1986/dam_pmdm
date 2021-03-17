function esMayorEdad(edad) {
    return new Promise((resolve, reject) => {
        if(edad >= 18) {
            resolve(true);
        } else {
            reject(false);
        }
    })
};

esMayorEdad(18)
    .then(resultado => console.log('mayor de edad'))
    .catch(resultado => console.log('Menor de edad'));