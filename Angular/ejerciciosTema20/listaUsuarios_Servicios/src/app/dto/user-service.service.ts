import { Injectable } from '@angular/core';
import { User } from './user';

const USERS = [ // Simula una base de datos...
  // new User() // Tambié funciona
  {id: 1, nombre: 'Yoda', trabaja: true, edad:1002},
  {id: 2, nombre: 'Leia', trabaja: true, edad:50},
  {id: 3, nombre: 'Luke', trabaja: false, edad:60},
  {id: 4, nombre: 'Vader',trabaja: false, edad:80}
];


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // El servicio tiene que tener métodos para trabajar con la bbdd

  public users: Array<User> = USERS;

  getNextId(): number {
    return this.users.length + 1;
  }

  getAllUsers(): Array<User> {
    return this.users;
  }

  getUser(id: number | string): User {
    return this.users.find(usuario => usuario.id===+id) // el + convierte el string a number
  }

  addUser(name: string, edad:number, trabaja:boolean): User {
    if(name != '' && (edad>=0 && edad<140)) {
      let nuevoUsuario = new User(this.getNextId(), name, edad, trabaja);
      this.users.push(nuevoUsuario);
      return nuevoUsuario;
    }
    return null;
  }

  deleteUser(id: number | string): boolean {
    if (!isNaN(Number(id))){
      this.users.splice(this.users.findIndex(user => user.id===id), 1);
    }
    return false;
  }

  constructor() { }
}
