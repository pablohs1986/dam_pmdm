export class User {
    nombre: string;
    edad: number;
    trabaja: boolean;
    sexo: string

    constructor (nombre: string, edad: number, trabaja: boolean, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabaja = trabaja;
        this.sexo = sexo;
    }

    isMayorDeEdad(): boolean {
        return this.edad >= 18 ? true : false;
    }
}
