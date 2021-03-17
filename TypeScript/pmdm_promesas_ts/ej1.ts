export{}

function esMayorEdad(edad:number):Promise<boolean> {
    return new Promise <boolean>((resolve, reject) => {
        if (edad >= 18) 
            resolve(true); 
        else 
            reject(false);
    })
}

esMayorEdad(18)
    .then(resultado => console.log("Mayor de edad"))
    .catch(resultado => console.log("Menor de edad"));
