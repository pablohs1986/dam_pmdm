var arrayDatos = [
    { nombre: "Pedro", edad: 24 },
    { nombre: "María", edad: 18 },
    45,
    "9.876",
    [3, 4, 5],
    "hola"
];
// CON MAP
function esConvertible(entrada) {
    var parametro = entrada;
    if (typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }
    return isNaN(Number(entrada)) ? "El par\u00E1metro " + parametro + " NO es un n\u00FAmero" : "El par\u00E1metro " + parametro + " S\u00CD es un n\u00FAmero"; // Number() pasa un dato a un numero
}
var arrayResultados1 = arrayDatos.map(esConvertible);
console.log('CON MAP:');
console.log(arrayResultados1);
// CON FOREACH
function esConvertibleFor(entrada) {
    var parametro = entrada;
    if (typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }
    console.log((Number(entrada)) ? "El par\u00E1metro " + parametro + " NO es un n\u00FAmero" : "El par\u00E1metro " + parametro + " S\u00CD es un n\u00FAmero"); // Number() pasa un dato a un numero
}
console.log('CON FOREACH:');
arrayDatos.forEach(esConvertibleFor);
// CON FILTER
function filtroEsConvertibleANumero(entrada) {
    return isNaN(Number(entrada)) === false; // false porque retorna los que son números
}
console.log('CON FILTER:');
var arrayResultados2 = arrayDatos.filter(filtroEsConvertibleANumero);
console.log(arrayResultados2);
