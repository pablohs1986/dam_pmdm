// DATOS

let tareas = [
    {
        empleado:"a",
        nombre: "tarea 1",
        duracion_horas: 2
    },
    {
        empleado:"b",
        nombre: "tarea 2",
        duracion_horas: 0.5
    },
    {
        empleado:"c",
        nombre: "tarea 3",
        duracion_horas: 4
    },
    {
        empleado:"d",
        nombre: "tarea 4",
        duracion_horas: 1
    }
];

// APARTADO A

function duplicarDuracionTareas(nombreEmpleado: string, duracionHoras: number) {
    return new Promise(function (resolve, reject) {
        let tarea = tareas.filter(tarea => (tarea.duracion_horas >= duracionHoras) && (tarea.nombre == nombreEmpleado)).map(tarea => (tarea.duracion_horas * 2));
        resolve(tarea);
    });
}