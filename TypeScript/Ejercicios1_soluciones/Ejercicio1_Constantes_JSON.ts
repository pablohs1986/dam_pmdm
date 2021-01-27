// DEFINICIÓN DE LA FUNCIÓN
function esConvertibleNumero(x: any): string{
    let paramMostrar = x;
    if (typeof    x === "object")
        paramMostrar = JSON.stringify(x); //convierte un array de json o un json a string
    return  isNaN(Number(x)) ? `El parámetro ${paramMostrar} NO es un número` : `El parámetro ${paramMostrar} SÍ es un número`;
}

// PROGRAMA PRINCIPAL
document.body.innerHTML += "Con un número <br>"+esConvertibleNumero("3")+"<br>";
document.body.innerHTML += "Con un string no número <br>" + esConvertibleNumero("3A3") + "<br>";
document.body.innerHTML += "Con un string que es numérico <br>"+ esConvertibleNumero("3333") +"<br>";
document.body.innerHTML += "Con un objeto json <br>"+esConvertibleNumero({a:3,b:6}) + "<br>";
