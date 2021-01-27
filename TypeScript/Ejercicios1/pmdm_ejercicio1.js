function esConvertible(entrada) {
    var parametro = entrada;
    if (typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }
    return isNaN(Number(entrada)) ? "El par\u00E1metro " + parametro + " NO es un n\u00FAmero" : "El par\u00E1metro " + parametro + " S\u00CD es un n\u00FAmero"; // Number() pasa un dato a un numero
}
document.body.innerHTML += "Con un número <br>" + esConvertible(3) + "<br>";
document.body.innerHTML += "Con un string no número <br>" + esConvertible("3A3") + "<br>";
document.body.innerHTML += "Con un string que es numérico <br>" + esConvertible("3333") + "<br>";
document.body.innerHTML += "Con un objeto json <br>" + esConvertible({ a: 3, b: 6 }) + "<br>";
