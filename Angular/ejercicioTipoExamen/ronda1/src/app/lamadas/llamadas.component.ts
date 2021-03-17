import { Component, OnInit } from '@angular/core';
import { Llamadas } from '../modelo/llamadas';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.css']
})
export class LlamadasComponent implements OnInit {

  llamadas: Llamadas[];

  constructor() { }

  ngOnInit(): void {
    this.llamadas = Llamadas.getLlamadas(); // ojooo
  }

}
