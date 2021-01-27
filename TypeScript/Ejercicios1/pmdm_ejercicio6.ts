// let empleados = [
//     {
//         nombre: "Abel",
//         edad: 22,
//         salario: 1000,
//         direccion: {
//             calle: "Sta Rita",
//             numero: 3,
//             ciudad: "La Felguera"
//         }
//     },
//     {
//         nombre: "Ana",
//         edad: 24,
//         salario: 1100,
//         direccion: {
//             calle: "La Rue",
//             numero: 32,
//             ciudad: "Oviedo"
//         }
//     },
//     {
//         nombre: "Bartolomé",
//         edad: 32,
//         salario: 2000,
//         direccion: {
//             calle: "Uria",
//             numero: 4,
//             ciudad: "Oviedo"
//         }
//     },
//     {
//         nombre: "Bárbara",
//         edad: 42,
//         salario: 1800,
//         direccion: {
//             calle: "La nueva",
//             numero: 1,
//             ciudad: "Gijón"
//         }
//     },
//     {
//         nombre: "Carlos",
//         edad: 34,
//         salario: 1000,
//         direccion: {
//             calle: "El Percebe",
//             numero: 9,
//             ciudad: "La Felguera"
//         }
//     },
//     {
//         nombre: "Cristina",
//         edad: 54,
//         salario: 2100,
//         direccion: {
//             calle: "San Agustín",
//             numero: 12,
//             ciudad: "Gijón"
//         }
//     }
// ];

// let subida = 10; //es 10%

// //ejemplo de uso de map
// let nuevosSalarios1 = empleados.map(empleado => empleado.salario += empleado.salario * subida / 100);
// console.log(nuevosSalarios1);

// //ejemplo de desestructuración y de resto de parámetros ...
// let { nombre, salario } = empleados[nuevosSalarios1.indexOf(Math.max(...nuevosSalarios1))];
// console.log(`El empleado ${nombre} con un salario de ${salario} es el que más gana`);