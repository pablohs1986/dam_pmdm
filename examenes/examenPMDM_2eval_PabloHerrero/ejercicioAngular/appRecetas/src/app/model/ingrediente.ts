export class Ingrediente {

    nombre: string;
    cantidad: number;
    unidad: string;

    constructor(
        nombre: string,
        cantidad: number,
        unidad: string
    ){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.unidad = unidad;
    }
}
