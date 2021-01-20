let edad = prompt('Introduce tu edad:');
alert(validarEdad(edad));

function validarEdad(edad) {
    let mensaje;

    if(edad >= 1 && edad < 18) {
        return mensaje = 'Demasiado joven :(';
    } else if(edad >= 18 && edad <=140) {
        return mensaje = 'Mayor de edad :)';
    } else if(edad > 140 || edad < 1) {
        return mensaje = 'Edad incorrecta.';
    } else if(edad == NaN) {
        return mensaje = 'Error. No es un número';
    }
};