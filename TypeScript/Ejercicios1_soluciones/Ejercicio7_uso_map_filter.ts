// SOLUCIÓN 1: usando primero filter y sobre el resultado del filtro
// se aplica el map
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

//ejemplo de uso de filter combinado con map    

let nuevosSalarios = empleados.filter(
    empleado => empleado.edad >= 20 && empleado.edad < 30)
    .map(empleado => empleado.salario += empleado.salario * subida / 100);

//el array de empleados despues de subir el sueldo es:
console.log("El array de empleados después subida sueldo es:");
console.log(empleados);


// SOLUCIÓN 2: es equivalente al código anterior, pero sin usar filter;
// haciendo nosotros el recorrido con for y un if para quedarnos
// con los que tienen veintipico años. Tiene MÁS TRABAJO y ES PEOR.
let subida2 = 10;  //es 10%

//ejemplo de uso de map    
let nuevosSalarios2 = empleados.map(
    empleado => {
        if (empleado.edad >= 20 && empleado.edad < 30)
            return empleado.salario += empleado.salario * subida / 100
    });

//el array de empleados despues de subir el sueldo es:
console.log("El array de empleados después subida sueldo es:");
console.log(empleados);


// SOLUCIÓN 3: modificar la SOLUCIÓN 1 para crear una función filtro por
// edad que reciba la edad mínima y máxima a filtrar y pasaríamos esa función
// al filtro. Sería como en otros ejemplos que hicimos una función que 
// devuelve otra función. ES LA MEJOR SOLUCIÓN DE LAS TRES:


let subida3 = 10;  //es 10%

// Función filtrar por edad según una edad mínima y máxima
let filtroPorEdad=function (edadMin,edadMax){
    return function(ele){
        return ele.edad >= edadMin && ele.edad < edadMax;
    }
}

/* Esa misma función filtroPorEdad() en notación flecha sería:

   let filtroPorEdad = (edadMin,edadMax) => ele => ele.edad >= edadMin && ele.edad < edadMax;

   */

let nuevosSalarios3 = empleados.filter(filtroPorEdad)
    .map(empleado => empleado.salario += empleado.salario * subida / 100);

//el nuevo array de salarios es
console.log("El nuevo array de salarios es:");
console.log(nuevosSalarios3);
//el array de empleados despues de subir el sueldo es:
console.log("El array de empleados después subida sueldo es:");
console.log(empleados);

