function esMayorEdad(edad) {
    return new Promise((resolve, reject) => {
        edad >= 18 ? resolve(true) : reject(false);
    });
}
esMayorEdad(18)
    .then(resultado => console.log("Mayor de edad"))
    .catch(resultado => console.log("Menor de edad"));