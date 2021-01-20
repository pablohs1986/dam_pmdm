// DATOS
let salarios = [1800, 1200, 200, 100, 500, 1300, 1400];

// FUNCIONES
function modificarSalario(salarios, funcion, selector) {
    switch(selector.toUpperCase()) {
        case 'T':
            for (let i = 0; i < salarios.length; i++) {
                salarios[i] = funcion(salarios[i]);
            }
            break;
        case 'P':
            for (let i = 0; i < salarios.length; i++) {
                if(i%2 !== 0) { // Porque el primer elemento es 0
                    salarios[i] = funcion(salarios[i]);
                }
            }
            break;
        case '500':
            for (let i = 0; i < salarios.length; i++) {
                if(salarios[i] < 500)
                salarios[i] = funcion(salarios[i]);
            }
            break;
    }
}

function aumentarSalario10(salario) {
    return salario * 1.10;
}

function reducirSalario5(salario) {
    let descuento = salario * 0.05;
    return salario - descuento;
}

// PRUEBAS
// modificarSalario(salarios, aumentarSalario10, 't');
// console.log('Todos los salarios incrementados un 10%: ' + salarios);

// modificarSalario(salarios, aumentarSalario10, 'p');
// console.log('Salarios pares incrementados un 10%: ' + salarios);

// modificarSalario(salarios, aumentarSalario10, '500');
// console.log('Salarios menores de 500 incrementados un 10%: ' + salarios);

// modificarSalario(salarios, reducirSalario5, 'T');
// console.log('Todos los salarios reducidos un 5%: ' + salarios);

// modificarSalario(salarios, reducirSalario5, 'p');
// console.log('Salarios pares reducidos un 5%: ' + salarios);

// modificarSalario(salarios, reducirSalario5, '500');
// console.log('Salarios menores de 500 reducidos un 5%: ' + salarios);