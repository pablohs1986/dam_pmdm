var arrayAnimales = [
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
// Sin envolver el tipo
// let tipo = 'Perro';
// let arrayFiltrado = arrayAnimales.filter(animal => animal.especie === tipo);
// console.log(arrayFiltrado);
// Envolviendo
function filtrarArrayAnimalesPorTipo(tipo) {
    return function (animal) { return animal.especie === tipo; };
}
;
var arrayFiltrado = arrayAnimales.filter(filtrarArrayAnimalesPorTipo("Perro"));
console.log(arrayFiltrado);
