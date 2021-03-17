import { Llamada } from "./llamada";

export class Llamadas {

    private static llamadas: Llamada[] = [
        new Llamada('fallo al realizar copia seguridad', 'BIBLIOTECH',
            '../../../assets/backup-error.png',
            ['Capgemini', 'Angular', 'Libreria'], '985674747', 'cerrada', 'Ana María',
            new Date(2019, 0, 22)),
        new Llamada('fallo al imprimir informes finales', 'CONTATOTAL',
            '../../../assets/backup-error.png',
            ['DXC', 'Consultoría', 'Caja Free'], '985111111', 'en tránsito', 'Víctor',
            new Date(2018, 10, 2)),
        new Llamada('fallo al mostrar el listado de libros', 'BIBLIOTECH',
            '../../../assets/backup-error.png',
            ['Alta TECH', 'International', 'Libreria'], '985224455', 'en tránsito', 'Esther',
            new Date(2018, 2, 11))
    ];

    // Método que devuelve todas las llamadas
    static getLlamadas(): Llamada[] {
        return this.llamadas;
    }

    // Método que añade una llamada que se le pasa como parémetrp
    static addLlamada(llamada: Llamada): void {
        this.llamadas.push(llamada);
    }

    // Método que obtiene una llamada con el codigoIncidencia que se le pasa
    static getLlamada(codigoIncidencia: string): Llamada {
        return this.llamadas.find(llamada => llamada.codigoIncidencia === codigoIncidencia);
    }

    // Método que borra una llamada con el código de incidencia que se le pasa
    static deleteLlamada(codigoIncidencia: string): void {
        let llamadaEncontrada = this.llamadas.find(llamada => llamada.codigoIncidencia === codigoIncidencia);
        let indiceLlamada = this.llamadas.indexOf(llamadaEncontrada);
        this.llamadas.splice(indiceLlamada, 1);
    }

    // Método que eleva una incidencia cuyo codigoIncidencia se pasa
    static upCall(codigoIncidencia: string): void {
        let indiceLlamadaEncontrada = this.llamadas.findIndex(llamada => llamada.codigoIncidencia === codigoIncidencia);
        this.llamadas[indiceLlamadaEncontrada].estado = 'elevada';
    }

    // Método que cierra una incidencia cuyo codIncidencia se pasa
    static closeLlamada(codigoIncidencia: string): void {
        let indiceLlamadaEncontrada = this.llamadas.findIndex(llamada => llamada.codigoIncidencia === codigoIncidencia);
        this.llamadas[indiceLlamadaEncontrada].estado = 'cerrada';
    }
}
