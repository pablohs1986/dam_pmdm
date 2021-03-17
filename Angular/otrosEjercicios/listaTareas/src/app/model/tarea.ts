export class Tarea {
    
    static contadorTareas: number = 0; // OJOOOOOOO
    id: number;
    titulo: string;
    descripcion: string;
    realizada: boolean;

    constructor(
        titulo: string,
        descripcion: string
    ) {
        Tarea.contadorTareas++;
        this.id = Tarea.contadorTareas;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.realizada = false;
        console.log(this.id);
    }


}
