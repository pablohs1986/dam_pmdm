import { Tarea } from "./tarea";

export class Tareas {

    private static listaTareas: Tarea[] = [
        new Tarea('Tarea 1', 'lore ipsum blablablab'),
        new Tarea('Tarea 2', 'lore ipsum blablablab'),
        new Tarea('Tarea 3', 'lore ipsum blablablab'),
        new Tarea('Tarea 4', 'lore ipsum blablablab'),
        new Tarea('Tarea 5', 'lore ipsum blablablab')
    ];

    // Operaciones

    static getTareas(): Tarea[] {
        return this.listaTareas;
    }

    static addTarea(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    static getTarea(idTarea: number): Tarea {
        return this.listaTareas.find(tarea => tarea.id === idTarea);
    }

    static deleteTarea(idTarea: number): void {
        let tareaABorrar: Tarea = this.listaTareas.find(tarea => tarea.id === idTarea);
        let indiceTarea: number = this.listaTareas.indexOf(tareaABorrar);
        this.listaTareas.splice(indiceTarea, 1);
    }

    static cerrarTarea(idTarea: number): void {
        let indiceTarea: number = this.listaTareas.findIndex(tarea => tarea.id === idTarea);
        this.listaTareas[indiceTarea].realizada = true;
    }

    static crearTareaVacia(): Tarea {
        return new Tarea("", "");
    }
}
