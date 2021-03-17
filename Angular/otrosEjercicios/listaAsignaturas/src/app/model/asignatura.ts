export class Asignatura {
    
    static contadorAsignaturas: number = 0;
    id: number;
    titulo: string;
    descripcion: string;
    profesor: string;
    aprobada: boolean;

    constructor(
        titulo: string,
        descripcion: string,
        profesor: string
    ) {
        Asignatura.contadorAsignaturas++;
        this.id = Asignatura.contadorAsignaturas;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.aprobada = false;
        this.profesor = profesor;
    }
}
