// PERSONAS
var personas = [ 
    { 
        nombre: 'Ana', 
        edad: 30, 
        salario:2000, 
        id: 1 
    },
    { 
        nombre: 'Bea', 
        edad: 18, 
        salario:1500, 
        id: 2 
    }, 
    { 
        nombre: 'Carlos', 
        edad: 15, 
        salario:1000, 
        id: 3 
    }, 
    { 
        nombre: 'Daniel', 
        edad: 40, 
        salario:1800, 
        id: 4 
    } 
];

// API
let api = {
    getPersonaCallback: function (id, callback) {
        let personaConId = personas.find(persona => persona.id === id);
        
        if (personaConId !== undefined) {
            callback(null, personaConId);
        } else {
            callback(new Error('Persona no encontrada.'));
        }
    },

    getPersonaPromesa: function (id) {
        return new Promise((resolve, reject) => {
            let personaConId = personas.find(persona => persona.id === id);

            if(personaConId !== undefined) {
                resolve(personaConId);
            } else {
                reject(new Error('Persona no encontrada.'));
            }
        });
    },

    getPersonaConMayorEdadCallback: function(callback) {
        let personaConMayorEdad;
        let edadMaxima = 0;

        for (let i = 0; i < personas.length; i++) {
            if(personas[i].edad >= edadMaxima) {
                edadMaxima = personas[i].edad;
                personaConMayorEdad = personas[i];
            }
        }

        if(edadMaxima != 0) {
            callback(null, personaConMayorEdad);
        } else {
            callback(new Error('No hay personas que comparar.'));
        }
    }, 

    getPersonaConMayorEdadPromesa: function() {
        return new Promise((resolve, reject) => {
            let personaConMayorEdad;
            let edadMaxima = 0;
    
            for (let i = 0; i < personas.length; i++) {
                if(personas[i].edad >= edadMaxima) {
                    edadMaxima = personas[i].edad;
                    personaConMayorEdad = personas[i];
                }
            }

            if(edadMaxima != 0) {
                resolve(personaConMayorEdad);
            } else {
                reject(new Error('No hay personas que comparar.'));
            }
        });
    },

    getMediaSalariosCallback: function(callback) {
        let sumaSalarios = 0;
        let mediaSalarios = 0;
        
        for (let i = 0; i < personas.length; i++) {
            sumaSalarios += personas[i].salario;
        }
        
        mediaSalarios = sumaSalarios / personas.length;
        
        if(sumaSalarios != 0) {
            callback(null, mediaSalarios);
        } else {
            callback('No se han encontrado salarios.');
        }
    },

    getMediaSalariosPromesa: function() {
        return new Promise((resolve, reject) => {
            let sumaSalarios = 0;
            let mediaSalarios = 0;
            
            for (let i = 0; i < personas.length; i++) {
                sumaSalarios += personas[i].salario;
            }
            
            mediaSalarios = sumaSalarios / personas.length;
            
            if(sumaSalarios != 0) {
                resolve(mediaSalarios);
            } else {
                reject('No se han encontrado salarios.');
            }
        });
    },

    aniadirPersonaCallback: function(nombre, edad, salario, callback) {
        let nuevaPersona = {
            nombre: nombre,
            edad: edad,
            salario: salario,
            id: personas.length + 1
        }

        personas.push(nuevaPersona);

        if(nuevaPersona != undefined) {
            callback(null, 'Persona añadida.')
        } else {
            callback(new Error('Datos erróneos. Operación cancelada.'))
        }
    },

    aniadirPersonaPromesa: function(nombre, edad, salario) {
        return new Promise((resolve, reject) => {
            let nuevaPersona = {
                nombre: nombre,
                edad: edad,
                salario: salario,
                id: personas.length + 1
            }
    
            personas.push(nuevaPersona);
    
            if(nuevaPersona != undefined) {
                resolve('Persona añadida.');
            } else {
                reject(new Error('Datos erróneos. Operación cancelada.'));
            }
        });
    },

    modificarPersonaCallback: function(id, {nombre, edad, salario}, callback) {
        let indicePersonaAModificar = personas.findIndex(persona => persona.id === id); // findindex devuelve -1 si no se encuentra al elemento dentro del array que cumple la condición pasada en la función

        if(indicePersonaAModificar === -1) {
            callback(new Error('Persona no encontrada.'));
        } else {
            if(nombre) {
                personas[indicePersonaAModificar].nombre = nombre;
            } else if (edad) {
                personas[indicePersonaAModificar].edad = edad;
            } else if (salario) {
                personas[indicePersonaAModificar].salario = salario;
            }
            callback(null, `Persona con id ${id} modificada con éxito.`);
        }
    },

    modificarPersonaPromesa: function(id, {nombre, edad, salario}) {
        return new Promise((resolve, reject) => {
            let indicePersonaAModificar = personas.findIndex(persona => persona.id === id); // findindex devuelve -1 si no se encuentra al elemento dentro del array que cumple la condición pasada en la función

            if(indicePersonaAModificar === -1) {
                reject(new Error('Persona no encontrada.'));
            } else {
                if(nombre) {
                    personas[indicePersonaAModificar].nombre = nombre;
                } else if (edad) {
                    personas[indicePersonaAModificar].edad = edad;
                } else if (salario) {
                    personas[indicePersonaAModificar].salario = salario;
                }
                resolve(`Persona con id ${id} modificada con éxito.`);
            }
        });
    },

    borrarPersonaCallback: function(id, callback) {
        let indicePersonaABorrar = personas.findIndex(persona => persona.id === id); // findindex devuelve -1 si no se encuentra al elemento dentro del array que cumple la condición pasada en la función
        
        if(indicePersonaABorrar === -1) {
            callback(new Error('Persona no encontrada.'));
        } else {
            personas.splice(indicePersonaABorrar,1);
            callback(null, `Persona con id ${id} borrada.`);
        }
    },

    borrarPersonaPromesa: function(id) {
        return new Promise((resolve, reject) => {
            let indicePersonaABorrar = personas.findIndex(persona => persona.id === id); // findindex devuelve -1 si no se encuentra al elemento dentro del array que cumple la condición pasada en la función
        
            if(indicePersonaABorrar === -1) {
                reject(new Error('Persona no encontrada.'));
            } else {
                personas.splice(indicePersonaABorrar,1);
                resolve(`Persona con id ${id} borrada.`);
            }
        });
    }




}

// PRUEBAS
// console.log('>>> getPersona con Callback:');
// api.getPersonaCallback(1, function(error, persona){
//     if(error){
//         console.log('error ' + error.message);
//     } else {
//         console.log(JSON.stringify(persona));
//     }
// });

// console.log('>>> getPersona con Promesas:');
// api.getPersonaPromesa(1)
//     .then(persona => console.log(JSON.stringify(persona)))
//     .catch(error => console.log(error.message));

// console.log('>>> getPersonaMayorEdad con Callback:');
// api.getPersonaConMayorEdadCallback(function(error, persona){
//     if(error){
//         console.log('error ' + error.message);
//     } else {
//         console.log(JSON.stringify(persona));
//     }
// });

// console.log('>>> getPersonaMayorEdad con Promesas:');
// api.getPersonaConMayorEdadPromesa()
//     .then(persona => console.log(JSON.stringify(persona)))
//     .catch(error => console.log(error.message));

// console.log('>>> getMediaSalarios con Callback:');
// api.getMediaSalariosCallback(function(error, mediaSalarios){
//     if(error){
//         console.log(error.message);
//     } else {
//         console.log('Media salarios: ' + mediaSalarios);
//     }
// });

// console.log('>>> getMediaSalarios con Promesas:');
// api.getMediaSalariosPromesa()
//     .then(mediaSalarios => console.log(`Media salarios: ${mediaSalarios}`) )
//     .catch(error => console.log(error.message));

// console.log('>>> aniadirPersona con Callback:');
// api.aniadirPersonaCallback('Pablo', 34, 6000, function(error, mensaje){
//     if(error){
//         console.log(error.message);
//     } else {
//         console.log(mensaje);
//     }
// });

// console.log(personas);

// console.log('>>> aniadirPersona con Promesas:');
// api.aniadirPersonaPromesa('Colombo', 99, 100)
//     .then(mensaje => console.log(mensaje))
//     .catch(error => console.log(error.message));

// console.log(personas);

// console.log('>>> modificarPersona con Callback:');
// api.modificarPersonaCallback(1,{salario: 80000000}, function(error, mensaje){
//     if(error){
//         console.log(error.message);
//     } else {
//         console.log(mensaje);
//     }
// });

// console.log(personas);

// console.log('>>> modificarPersona con Promesas:');
// api.modificarPersonaPromesa(2,{nombre: 'Yoda'})
//     .then(mensaje => console.log(mensaje))
//     .catch(error => console.log(error.message));

// console.log(personas);

// console.log('>>> borrarPersona con Callback:');
// api.borrarPersonaCallback(1, function(error, mensaje) {
//     if(error){
//         console.log(error.message);
//     } else {
//         console.log(mensaje);
//     }
// })

// console.log(personas);

console.log('>>> borrarPersona con Promesas:');
api.borrarPersonaPromesa(6)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error.message));

console.log(personas);