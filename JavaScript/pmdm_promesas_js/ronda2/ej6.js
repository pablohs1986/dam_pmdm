var personas = [
    { 
        nombre: 'Ana', 
        edad: 30, 
        salario: 2000, 
        id: 1 
    }, 
    { 
        nombre: 'Bea', 
        edad: 18, 
        salario: 1500, 
        id: 2 
    }, 
    { 
        nombre: 'Carlos', 
        edad: 15, 
        salario: 1000, 
        id: 3 
    }, 
    { 
        nombre: 'Daniel', 
        edad: 40, 
        salario: 1800, 
        id: 4 
    }
];

function obtenerPersona(id) {
    return new Promise((resolve, reject) => {
        let personaBuscada = personas.find(persona => persona.id === id);

        if (personaBuscada !== undefined) {
            resolve(personaBuscada);
        } else {
            reject(new Error('Persona no encontrada'));
        }
    });
}



obtenerPersona(1)
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado));