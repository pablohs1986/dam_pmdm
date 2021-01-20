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

function aumentarSalario(porcentaje) {
    return salario => salario * (1+(porcentaje/100));
}

function reducirSalario(porcentaje) {
    return salario => salario - (salario * (porcentaje/100));
}

// PRUEBAS
// modificarSalario(salarios, aumentarSalario(100), 't');
// console.log('Todos los salarios incrementados: ' + salarios);

// modificarSalario(salarios, aumentarSalario(10), 'p');
// console.log('Salarios pares incrementados: ' + salarios);

// modificarSalario(salarios, aumentarSalario(20), '500');
// console.log('Salarios menores de 500 incrementados: ' + salarios);

// modificarSalario(salarios, reducirSalario(100), 'T');
// console.log('Todos los salarios reducidos: ' + salarios);

// modificarSalario(salarios, reducirSalario(50), 'p');
// console.log('Salarios pares reducidos: ' + salarios);

modificarSalario(salarios, reducirSalario(75), '500');
console.log('Salarios menores de 500 reducidos: ' + salarios);