let empleados = [
    {
        nombre: "Abel",
        edad: 22,
        salario: 1000,
        direccion: {
            calle: "Sta Rita",
            numero: 3,
            ciudad: "La Felguera"
        }
    },
    {
        nombre: "Ana",
        edad: 24,
        salario: 1100,
        direccion: {
            calle: "La Rue",
            numero: 32,
            ciudad: "Oviedo"
        }
    },
    {
        nombre: "Bartolomé",
        edad: 32,
        salario: 2000,
        direccion: {
            calle: "Uria",
            numero: 4,
            ciudad: "Oviedo"
        }
    },
    {
        nombre: "Bárbara",
        edad: 42,
        salario: 1800,
        direccion: {
            calle: "La nueva",
            numero: 1,
            ciudad: "Gijón"
        }
    },
    {
        nombre: "Carlos",
        edad: 34,
        salario: 1000,
        direccion: {
            calle: "El Percebe",
            numero: 9,
            ciudad: "La Felguera"
        }
    },
    {
        nombre: "Cristina",
        edad: 54,
        salario: 2100,
        direccion: {
            calle: "San Agustín",
            numero: 12,
            ciudad: "Gijón"
        }
    }
];

// Opción 1
// console.log(`Mostrando antes de los cambios:`)
// empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));


// let subida = 10; //es 10%
// let nuevosSalarios=empleados.map(empleado => empleado.salario += empleado.salario * subida / 100);

// console.log('Nuevos salarios:')
// empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));


// Opción 2
// console.log(`Mostrando antes de los cambios:`)
// empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));

// let subirSalario = function (porcentaje: number):(empleado:any)=>number {
//     // return function (empleado) {
//     //     empleado.salario += empleado.salario * porcentaje/100;
//     // }
//     return empleado => empleado.salario += empleado.salario * porcentaje/100;
// };

// let nuevosSalarios = empleados.map(subirSalario(10));
// console.log(`\nNuevos salarios: ${nuevosSalarios}`);
// empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));

// Opción 3 -> arrow
console.log(`Mostrando antes de los cambios:`)
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));

let subirSalario = porcentaje => empleado => empleado.salario += empleado.salario* porcentaje/100;

let nuevosSalarios = empleados.map(subirSalario(10));

console.log(`Mostrando tras los cambios:`)
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre} y Nuevo Salario: ${empleado.salario}`));
