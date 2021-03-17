"use strict";
var animales = [
    {
        nombre: "Poppy",
        especie: "Burro",
        hobbies: ["Comer", "Rascarse", "Galopar"],
        propietario: {
            nombre: "Adrián",
            ciudad: "Avilés",
            tfno: "601112235"
        },
        añoNacimiento: 2000
    },
    {
        nombre: "Pepa Pig",
        especie: "Cerdo",
        hobbies: ["Comer", "Rascarse", "Dormir"],
        propietario: {
            nombre: "Andrea",
            ciudad: "Avilés",
            tfno: "671182295"
        },
        añoNacimiento: 2010
    },
    {
        nombre: "Luck",
        especie: "Perro",
        hobbies: ["Correr", "Jugar con la pelota"],
        propietario: {
            nombre: "Belarmino",
            ciudad: "Sama",
            tfno: "641145235"
        },
        añoNacimiento: 2005
    },
    {
        nombre: "Srek",
        especie: "Burro",
        hobbies: ["Comer", "Rascarse", "Galopar"],
        propietario: {
            nombre: "Beatriz",
            ciudad: "Oviedo",
            tfno: "689512266"
        },
        añoNacimiento: 2001
    },
    {
        nombre: "Pirata",
        especie: "Perro",
        hobbies: ["Correr", "Buscar cosas"],
        propietario: {
            nombre: "Adrián",
            ciudad: "Avilés",
            tfno: "601112235"
        },
        añoNacimiento: 2005
    }
];
// EJERCICIO 1
// Apartado A
var filtro = function (arrayAnimales, especie) { return arrayAnimales.filter(function (animal) { return animal.especie === especie; }); };
var arrayFiltradoPerro = filtro(animales, "Perro");
console.log('Resultado ejercicio A:');
console.log(arrayFiltradoPerro);
// Apartado B
var filtroEspecie = function (especie) { return function (animal) { return animal.especie === especie; }; };
var resultAnimales = animales.filter(filtroEspecie("Perro"));
console.log('Resultado ejercicio B_1:');
console.log(resultAnimales);
var otroResu = animales.filter(filtroEspecie("Burro"));
console.log('Resultado ejercicio B_2:');
console.log(otroResu);
// SIN ARROW
// // Ejercicio 1
// // A
// function filtro(arrayAnimales: any[], especie: string): any[] {
//     let arrayFiltrado: any[];
//     arrayFiltrado = arrayAnimales.filter((animal: any): any => animal.especie === especie); 
//     return arrayFiltrado;
// }
// let arrayFiltradoPerro = filtro(animales, "Perro");
// console.log('Resultado ejercicio A:');
// console.log(arrayFiltradoPerro);
// // B
// function filtroEspecie(especie: string): any {
//     return (animal: any): any => animal.especie === especie ;
// }
// let resultAnimales = animales.filter(filtroEspecie("Perro"));
// console.log('Resultado ejercicio B_1:');
// console.log(resultAnimales);
// let otroResu=animales.filter(filtroEspecie("Burro"));
// console.log('Resultado ejercicio B_2:');
// console.log(otroResu);
