import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;
  title: string;

  constructor() {
    this.title = "DAM Call Center";
  }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
