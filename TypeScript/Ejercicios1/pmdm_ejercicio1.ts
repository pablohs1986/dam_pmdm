function esConvertible(entrada: any) {
    let parametro = entrada;

    if(typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }

    return isNaN(Number(entrada)) ? `El parámetro ${parametro} NO es un número` : `El parámetro ${parametro} SÍ es un número`; // Number() pasa un dato a un numero
}


document.body.innerHTML += "Con un número <br>"+esConvertible(3)+"<br>";
document.body.innerHTML += "Con un string no número <br>" + esConvertible("3A3") + "<br>";
document.body.innerHTML += "Con un string que es numérico <br>"+ esConvertible("3333") +"<br>";
document.body.innerHTML += "Con un objeto json <br>"+esConvertible({a:3,b:6}) + "<br>";