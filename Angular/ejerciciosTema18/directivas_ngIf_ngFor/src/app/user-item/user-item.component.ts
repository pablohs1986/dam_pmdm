import { Component, OnInit } from '@angular/core';
import { User } from '../dto/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  usuarios: Array<User>;
  isHombre: boolean;

  constructor() {
    this.usuarios = [
      new User('Pepe', 30, true, 'hombre'),
      new User('Ramona', 20, false, 'mujer'),
      new User('Jose', 26, true, 'hombre'),
      new User('Ángela', 13, false, 'mujer'),
      new User('Txoko', 50, false, 'hombre'),
      new User('Itziar', 18, false, 'mujer'),
    ];
    this.isHombre = true;
   }

  ngOnInit(): void {
  }

  // mostrarHombreMujer(valor: boolean):void {
  //   this.isHombre = valor;
  // }

  mostrarHombreMujer():void {
    if(this.isHombre) {
      this.isHombre = false;
    } else {
      this.isHombre = true;
    }
  }

}
