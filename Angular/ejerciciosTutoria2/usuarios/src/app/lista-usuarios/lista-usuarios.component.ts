import { Component, OnInit } from '@angular/core';
import { Usuario } from '../dto/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor() { 
    this.usuarios = [
      new Usuario('Jose Luis', 50, true),
      new Usuario('Alejandra', 45, true),
      new Usuario('Chapuli', 48, false),
      new Usuario('Julia', 54, false)
    ];
  }

  borrarUsuario(usuario: Usuario) {
    this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
  }

  ngOnInit(): void {
  }

}
