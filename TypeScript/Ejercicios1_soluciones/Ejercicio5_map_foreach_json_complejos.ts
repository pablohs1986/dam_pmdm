// SOLUCIÓN 1 - ACCEDIENDO A LA VARIABLE SUBIDA 
// QUE ESTÁ FUERA DE LA FUNCIÓN

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


let subida = 10;  //es 10%

let nuevosSalarios=empleados.map(empleado => empleado.salario += empleado.salario * subida / 100);
console.log(`Los nuevos salarios son ${nuevosSalarios}`);
console.log("Los empleados con el nuevo salario son:");
console.log(empleados);
console.log("O mostrando sólo el nombre y salario:");
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre}  y  Nuevo Salario: ${empleado.salario}`));


// SOLUCIÓN 2: Usando una función que recibe un parámetro y
// pasar esa función al map
// SOLUCIÓN MEJOR

let funcionSubirSalario = function (porcentaje:number){
    return function(elemento){
        return elemento.salario += elemento.salario * porcentaje / 100;
    }
}

let nuevosSalarios2=empleados.map(funcionSubirSalario(10));
console.log(`Los nuevos salarios son ${nuevosSalarios2}`);
console.log("Los empleados con el nuevo salario son:");
console.log(empleados);
console.log("O mostrando sólo el nombre y salario:");
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre}  y  Nuevo Salario: ${empleado.salario}`));


// SOLUCIÓN 3: es la misma que la Solución 2 pero INDICANDO EL TIPO DE DATO
// QUE DEVUELVE LA FUNCIÓN "funcionSubirSalario"

let funcionSubirSalario2 = function (porcentaje:number):(ele:any)=>number{
    return function(elemento){
        return elemento.salario += elemento.salario * porcentaje / 100;
    }
}

let nuevosSalarios3=empleados.map(funcionSubirSalario2(10));
console.log(`Los nuevos salarios son ${nuevosSalarios3}`);
console.log("Los empleados con el nuevo salario son:");
console.log(empleados);
console.log("O mostrando sólo el nombre y salario:");
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre}  y  Nuevo Salario: ${empleado.salario}`));


// SOLUCIÓN 4: es la misma que la Solución 2 pero usando funciones flecha para abreviar
let funcionSubirSalario3 = porcentaje => elemento => elemento.salario += elemento.salario * porcentaje / 100;

let nuevosSalarios4=empleados.map(funcionSubirSalario3(10));
console.log(`Los nuevos salarios son ${nuevosSalarios4}`);
console.log("Los empleados con el nuevo salario son:");
console.log(empleados);
console.log("O mostrando sólo el nombre y salario:");
empleados.forEach(empleado => console.log(`Nombre: ${empleado.nombre}  y  Nuevo Salario: ${empleado.salario.toFixed(2)}`));
