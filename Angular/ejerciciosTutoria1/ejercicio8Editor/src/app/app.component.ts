import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EditoOoOoOrRrRrRrrRRrrrRRRrrrr';
  colorSeleccionado = "#FF79C6";
  colorOriginal = "";

  cambiarFondoBody(cuadroColor: SVGRectElement) {
    this.colorOriginal = document.body.style.backgroundColor;
    document.body.style.backgroundColor = cuadroColor.getAttribute("fill");
  }

  devolverColorOriginalBody() {
    document.body.style.backgroundColor = this.colorOriginal;
  }

  cambiarFondoSeleccion(color: string) {
    this.colorSeleccionado = color;
  }

}
