import { Injectable } from '@angular/core';
import { Asignatura } from '../model/asignatura';

let listaAsignaturas: Asignatura[] = [
  new Asignatura("AD", "movidas de AD", "JL"),
  new Asignatura("PS", "movidas de PSP", "JL"),
  new Asignatura("SGE", "movidas de SGE", "Cesar"),
  new Asignatura("PMDM", "movidas de PMDM", "Alejandra"),
  new Asignatura("PSP", "movidas de PSP", "JL"),
  new Asignatura("EIE", "movidas de EIE", "Menchu"),
];

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  // OPERACIONES

  getAsignaturas(): Asignatura[] {
    return listaAsignaturas;
  }

  addAsignatura(asignatura: Asignatura): void {
      listaAsignaturas.push(asignatura);
  }

  getAsignatura(id: number): Asignatura {
      return listaAsignaturas.find(asignatura => asignatura.id === id);
  }

  deleteAsignatura(id: number): void {
      let tareaABorrar: Asignatura = listaAsignaturas.find(asignatura => asignatura.id === id);
      let indiceAsignatura: number = listaAsignaturas.indexOf(tareaABorrar);
      listaAsignaturas.splice(indiceAsignatura, 1);       
  }

  cerrarAsignatura(id: number): void {
      let indiceAsignatura: number = listaAsignaturas.findIndex(asignatura => asignatura.id === id);
      listaAsignaturas[indiceAsignatura].aprobada = true;
  }

  crearAsignaturaVacia(): Asignatura {
      return new Asignatura("","","");
  }
}
