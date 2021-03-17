"use strict";
// DATOS
var tareas = [
    {
        empleado: "a",
        nombre: "tarea 1",
        duracion_horas: 2
    },
    {
        empleado: "b",
        nombre: "tarea 2",
        duracion_horas: 0.5
    },
    {
        empleado: "c",
        nombre: "tarea 3",
        duracion_horas: 4
    },
    {
        empleado: "d",
        nombre: "tarea 4",
        duracion_horas: 1
    }
];
// APARTADO A
function duplicarDuracionTareas(nombreEmpleado, duracionHoras) {
    return new Promise(function (resolve, reject) {
        var tarea = tareas.filter(function (tarea) { return (tarea.duracion_horas >= duracionHoras) && (tarea.empleado == nombreEmpleado); }).map(function (tarea) { return (tarea.duracion_horas * 2); });
        resolve(tarea);
    });
}
duplicarDuracionTareas('a', 2)
    .then(function (resultado) { return console.log(resultado); });
