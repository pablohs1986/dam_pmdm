import { Injectable } from '@angular/core';
import { CallModel } from '../model/call-model';

    // ARRAY LLAMADAS
    const callsArray: CallModel[] = [
      new CallModel(
          'fallo al realizar copia de seguridad',
          'BIBLIOTECH',
          '../../../assets/img/backup-error.png',
          ['Capgemini', 'Angular', 'Libreria'],
          '985674747',
          'en tránsito',
          'Ana María',
          new Date('22/01/2019')),

      new CallModel(
          'fallo al imprimir informes finales',
          'CONTATOTAL',
          '../../../assets/img/printer-error.png',
          ['DXC', 'Consultoría', 'Caja Free'],
          '985111111',
          'en tránsito',
          'Victor',
          new Date('2/11/2019')),
      
      new CallModel(
          'fallo al mostrar el listado de libros',
          'BIBLIOTECH',
          '../../../assets/img/book-error.png',
          ['Alta TECH', 'Internacional', 'Libreria'],
          '985224455',
          'en tránsito',
          'Esther',
          new Date('11/3/2018'))
  ];

@Injectable({
  providedIn: 'root'
})
export class CallServiceService {

  // OPERACIONES
  // Método que devuelve un array con las llamadas
  getCalls(): CallModel[] {
      return callsArray;
  }

  // Método que añade una llamada que se le pasa como parámetro
  addCall(call: CallModel): void {
      call.generarCodigoIncidencia(); // genera código de incidencia para esa call
      callsArray.push(call);
  }

  // Método que obtiene una llamada cuyo codIncidencia se pasa como parámetro
  getCall(codIncidencia: string): CallModel {
      return callsArray.find(call => call.codIncidencia === codIncidencia);
  }

  // Método que borra una llamada cuyo codIncidencia se pasa como parámetro
  deleteCall(codIncidencia: string): void {
      let llamadaABorrar: CallModel = callsArray.find(call => call.codIncidencia === codIncidencia);
      let indiceLlamada = callsArray.indexOf(llamadaABorrar);
      callsArray.splice(indiceLlamada, 1);
  }

  // Método que eleva una llamada cuyo codIncidencia se pasa como parámetro
  upCall(codIncidencia: string): void {
      let indiceLlamadaAElevar = callsArray.findIndex(call => call.codIncidencia === codIncidencia);
      callsArray[indiceLlamadaAElevar].estado = 'elevada';
  }

  // Método que cierra una incidencia cuyo código de incidencia se pasa como parámetro
  closeCall(codIncidencia: string): void {
      let indiceLlamadaACerrar = callsArray.findIndex(call => call.codIncidencia === codIncidencia);
      callsArray[indiceLlamadaACerrar].estado = 'cerrada';
  }

  // Método que añade una llamada vací
  createEmptyCall(): CallModel {
      return new CallModel('', '', '', [''], '', 'en tránsito', '', null)
  }
}
