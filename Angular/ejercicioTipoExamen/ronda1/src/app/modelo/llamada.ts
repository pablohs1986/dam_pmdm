export class Llamada {
    static numeroLlamadas: number = 0;
    idLlamada: number;
    codigoIncidencia: string;

    constructor(
        public descripcion: string,
        public softwareIncidencia: string,
        public imageUrl: string,
        public empresaDepartamentoProyecto: string[],
        public telefonoOrigen: string,
        public estado: string,
        public operadorAtendio: string,
        public fechaIncidencia: Date
    ) {
        Llamada.numeroLlamadas++;
        this.idLlamada = Llamada.numeroLlamadas;
        this.codigoIncidencia = this.softwareIncidencia.slice(0, 3) + '#' + this.idLlamada;
        console.log(this.codigoIncidencia);
    }


    /** Método que genera el codIncidencia.
     *  En el caso de productos añadidos con el formulario añadir, se necesita,
     *  pues inicialmente no se sabe el software y el constructor genera un cod inadecuado
     */
    generarCodIncidencia() {
        this.codigoIncidencia = this.softwareIncidencia.slice(0, 3) + '#' + this.idLlamada;
    }
}
