// DEFINICIÓN DE LA FUNCIÓN
function esConvertibleNumero(x: any): string{
    let paramMostrar = x;
    if (typeof    x === "object")
        paramMostrar = JSON.stringify(x); //convierte un array de json o un json a string
    return  isNaN(Number(x)) ? `El parámetro ${paramMostrar} NO es un número` : `El parámetro ${paramMostrar} SÍ es un número`;
}

// PROGRAMA PRINCIPAL
let arrayVariado = [
    { nombre: "Pedro", edad: 24 },
    { nombre: "María", edad: 18 },
    45,
    "9.876",
    [3, 4, 5],
    "hola",
    "adios"
];

// SOLUCIÓN 1: Usando el método map de los arrays

let arrayResultado=arrayVariado.map(esConvertibleNumero);
console.log(arrayResultado);

/* Forma estándar de llamar una función dentro de map
  let arrayResultado=arrayVariado.map(elemento=>esConvertibleNumero(elemento));
  console.log(arrayResultado);*/

/* Otras formas equivalentes que se podrían realizar con map serían:

   Forma 1: llamando a map sobre el propio array

    let arrayResultados2=[
        { nombre: "Pedro", edad: 24 },
        { nombre: "María", edad: 18 },
        45,
        "9.876",
        [3, 4, 5],
        "hola",
        "adios"
    ].map(esConvertibleNumero);
    console.log(arrayResultados2);

    Forma 2: implementado dentro de map la propia función esConvertibleNumero()

    let arrayResultados3 = arrayVariado.map(
                (x: any) => {
                let paramMostrar = x;
                if (typeof x === "object")
                    paramMostrar = JSON.stringify(x);
                return isNaN(Number(x)) ? `El parámetro ${paramMostrar} NO es un número` : `El parámetro ${paramMostrar} SÍ es un número`;
            });
    console.log(arrayResultados3);
*/

// SOLUCIÓN 2: Usando el método foreach de los arrays. OJO, este
// método no me devolverá el array, por tanto, debo modificar mi función
// para que pinte en pantalla directamente

function esConvertibleNumero2(x: any): void {
    let paramMostrar = x;
    if (typeof x === "object")
        paramMostrar = JSON.stringify(x);
    console.log(isNaN(Number(x)) ? `El parámetro ${paramMostrar} NO es un número` : `El parámetro ${paramMostrar} SÍ es un número`);
}

let arrayVariado2 = [
    { nombre: "Pedro", edad: 24 },
    { nombre: "María", edad: 18 },
    45,
    "9.876",
    [3, 4, 5],
    "hola"
]
arrayVariado2.forEach(esConvertibleNumero2);

// SOLUCIÓN 3: Usando el método filter de los arrays para
// que me muestre, por ejemplo, sólo los que sean convertibles
// a números. OJO: debo modificar la función para que devuelva 
// un booleano.

function esConvertibleNumero3(x: any): boolean {
    return isNaN(Number(x))===false;
}

let arrayVariado3 = [
    { nombre: "Pedro", edad: 24 },
    { nombre: "María", edad: 18 },
    45,
    "9.876",
    [3, 4, 5],
    "hola"
]

let arrayResultados3=arrayVariado3.filter(esConvertibleNumero3);
console.log(arrayResultados3);


