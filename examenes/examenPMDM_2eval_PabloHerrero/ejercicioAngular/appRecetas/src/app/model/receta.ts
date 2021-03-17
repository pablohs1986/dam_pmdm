import { Ingrediente } from "./ingrediente";

export class Receta {

    static numeroRecetas: number = 0;
    cod: number;
    nombre: string;
    foto: string;
    calorias: number;
    tiempoCocinando: number;
    ingredientes: Ingrediente[];
    numeroPersonas: number;
    votos: number;

    constructor(
        nombre: string,
        foto: string,
        calorias: number,
        tiempoCocinando: number,
    ) {
        Receta.numeroRecetas++;
        this.cod = Receta.numeroRecetas;
        this.nombre = nombre;
        this.foto = foto;
        this.calorias = calorias;
        this.tiempoCocinando = tiempoCocinando;
        this.numeroPersonas = 4;
        this.votos = 0;
    };

    /** Método que duplica las personas */
    static duplicarPersonas(receta: Receta): void {
        this.numeroRecetas*2;
    }
}
