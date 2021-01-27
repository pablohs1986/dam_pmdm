import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public nombre_componente = 'Lista de usuarios';
  nombres: string[];

  constructor() {
    this.nombres = ['Yoda', 'Luke', 'Vader'];
   }

  ngOnInit(): void {
  }

}
