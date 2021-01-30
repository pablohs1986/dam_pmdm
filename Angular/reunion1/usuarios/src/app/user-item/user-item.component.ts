import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../dto/usuario';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() usuario: Usuario;
  @Output() borrar = new EventEmitter<Usuario>(); // Opción B

  constructor() { }

  ngOnInit(): void {
  }

  onBorrar() { // Opción B
    this.borrar.emit(this.usuario);
  }
}
