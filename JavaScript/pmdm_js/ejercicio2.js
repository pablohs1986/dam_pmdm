let numero = prompt('Introduce un número:');
alert(`¿${numero} es par?: ` + isPar(numero));

function isPar(numero) {
    return numero%2 === 0 ? true : false;
};