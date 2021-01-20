let numero1 = prompt('Introduce un número:');
let numero2 = prompt('Introduce otro número:');
let numeroMayor = calcularNumeroMayor(numero1, numero2);

alert(`El número ${numeroMayor} es mayor.`);

function calcularNumeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
};