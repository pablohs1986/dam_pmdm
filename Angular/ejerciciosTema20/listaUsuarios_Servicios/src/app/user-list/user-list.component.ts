import { Component, OnInit } from '@angular/core';
import { User } from '../dto/user';
import { UserServiceService } from '../dto/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public titulo: string = 'Lista de usuarios';
  usuarios: Array<User>;
  isModoAniadir: boolean = false;
  isModoVerUser: boolean = false;

  constructor(private userService: UserServiceService) {
    
  }

  ngOnInit(): void {
    this.usuarios = this.userService.getAllUsers();
  }

  borrarUsuario(user: User) {
    this.userService.deleteUser(user.id);
  }

  cambiarAModoAniadir() {
    this.isModoAniadir = true;
  }
  
  cambiarAModoVerUser() {
    this.isModoVerUser = true;
  }

  aniadirNuevoUser(nombre: string, edad: number, trabaja: boolean): void {
    this.userService.addUser(nombre, edad, trabaja);
    this.isModoAniadir=false;
  }

  getUserById(id:number): void {
    let usuarioBuscado = JSON.stringify(this.userService.getUser(id));
    alert(`El usuario con el id ${id} es: ${usuarioBuscado}`)
    this.isModoVerUser = false;
  }

}
