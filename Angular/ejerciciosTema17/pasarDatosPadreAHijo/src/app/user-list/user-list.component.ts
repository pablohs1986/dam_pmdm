import { Component, OnInit } from '@angular/core';
import { User } from '../dto/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public titulo: string = 'Lista de usuarios';
  usuarios: User[];

  constructor() {
    this.usuarios = [
      new User('Luke', 60, false),
      new User('Leia', 50, true),
      new User('Anakin', 9, false),
      new User('Vader', 90, true),
      new User('Yoda', 210, true)
    ];
  }

  ngOnInit(): void {
  }

}
