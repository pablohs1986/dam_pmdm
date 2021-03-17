export class CallModel {
    static numCalls: number = 0;
    idCall: number;
    codIncidencia: string; // 3 letras software + # + id llamada

    constructor(
        public descripcion: string,
        public softwareIncidencia: string,
        public imgUrl: string,
        public empresaDptoProyecto: string[], // Array que incluye empresa, departamento y proyecto
        public telefonoOrigen: string,
        public estado: string,
        public operadorAtendio: string,
        public fechaIncidencia: Date
    ) {
        CallModel.numCalls++;
        this.idCall = CallModel.numCalls;
        this.codIncidencia = this.softwareIncidencia.slice(0, 3) + '#' + this.idCall;
        console.log(this.codIncidencia);
    }

    // Método que genera un código de incidencia
    generarCodigoIncidencia() {
        this.codIncidencia = this.softwareIncidencia.slice(0, 3) + '#' + this.idCall;
        console.log(this.codIncidencia);
    }
}
