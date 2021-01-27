let animales: any = [
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

// SOLUCIÓN 1: Usando una función flecha

let tipo="Perro";
let resulAnimales=animales.filter(animal=>animal.especie===tipo);
console.log(resulAnimales);

// SOLUCIÓN 2: Usando una función que DEVUELVE OTRA FUNCIÓN

let tipo2="Perro";

let filtroFuncion=function (parametro: string){
    return function(elemento:any){
        return elemento.especie===parametro;
    }
};

let resuAnimales2=animales.filter(filtroFuncion(tipo2));
let resuAnimales3=animales.filter(filtroFuncion("Burro"));
console.log(resuAnimales2);
console.log(`Mis burros son: ${JSON.stringify(resuAnimales3)}`);

// SOLUCIÓN 3: es la misma que la solución 2, pero usando la forma
// abreviada con funciones flecha. Como hay 2 returns, hay 2 =>.
// Fijaros:

let filtroFuncion2=parametro => elemento => elemento.especie===parametro;

let resuAnimales4=animales.filter(filtroFuncion2(tipo));
console.log(resuAnimales4);