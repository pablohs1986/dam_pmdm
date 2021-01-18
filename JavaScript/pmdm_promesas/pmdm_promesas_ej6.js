// API
let api = {
    getPersonaCallback: function (id, callback) {
        let personaConId = personas.find(persona => persona.id === id);
        
        if (personaConId !== undefined) {
            return callback(null, personaConId);
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
    }
}

// Personas
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

// Pruebas
api.getPersonaCallback(1, function(error, persona){
    if(error){
        console.log('error' + error.message);
    } else {
        console.log(JSON.stringify(persona));
    }
});

api.getPersonaPromesa(1)
    .then(person => console.log(JSON.stringify(persona))) // seguir aquí
    .catch(error => console.log(error.message));