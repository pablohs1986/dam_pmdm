import { Ingrediente } from "./ingrediente";
import { Receta } from "./receta";

export class Recetas {

    // Datos (array de recetas)
    private static recetas: Receta[] = [
        new Receta('Lentejas', '../../assets/img/lentejas.jpg', 404, 10),
        new Receta('Fabada', '../../assets/img/fabada.jpg', 505, 20),
        new Receta('Paella', '../../assets/img/paella.jpg', 505, 20),
        new Receta('Ensalada de atún', '../../assets/img/ensalada_atun.jpg', 505, 20),
        new Receta('Berenjena rellena', '../../assets/img/berenjena_rellena.jpg', 505, 20),
        new Receta('Chopa a la sidra', '../../assets/img/chopa_sidra.jpg', 505, 20)
    ];

    // Operaciones

    /** Método que devuelve el array de recetas */
    static getRecetas(): Receta[] {
        return this.recetas;
    }

    /** Método que devuelve una receta a partir de su cod */
    static getReceta(cod: number): Receta {
        return this.recetas.find(receta => receta.cod == cod);
    }

    /** Método que añade uan receta */
    static addReceta(receta: Receta) {
        this.recetas.push(receta);
    }

    /** Metodo que borra una receta, psando el cod de la misma como parámetro */
    static deleteReceta(cod: number) {
        let recetaABorrar = this.recetas.find(receta => receta.cod == cod);
        let indiceReceta = this.recetas.indexOf(recetaABorrar);
        this.recetas.splice(indiceReceta, 1);
    }

    /** Método que aumenta los votos de la receta pasa */
    static upReceta(receta: Receta) {
        receta.votos++;
    }

     /** Método que disminuye los votos de la receta pasa */
     static downReceta(receta: Receta) {
        receta.votos--
    }

    /** Método que añade un ingrediente a la receta, ambos datos
     * se pasan como parámetros */
    static addIngrediente(receta: Receta, ingredienteAniadir: Ingrediente) {
        receta.ingredientes.push(ingredienteAniadir);
    }


}
