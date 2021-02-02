export class Articulo {
    titulo: string;
    votos: number;
    enlace: string;

    constructor(titulo: string, votos: number, enlace: string) {
        this.titulo = titulo;
        this.votos = votos;
        this.enlace = enlace;
    }

    votoArriba(): void {
        this.votos++;
    }
    
    votoAbajo(): void {
        this.votos--;
    }

    mostrarDominio(): string {
        try {
          const path: string = this.enlace.split('//')[1];
          return path.split('/')[0];
        } catch (error) {
            console.log(error);
            return null
        }
      }
}
