export class User {
    id: number;
    nombre: string;
    edad: number;
    trabaja: boolean;

    constructor(id: number, nombre: string, edad: number, trabaja: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.trabaja = trabaja;
    }
}
