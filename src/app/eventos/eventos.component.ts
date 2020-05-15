import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {


  @Output() enviarEvento: EventEmitter<any>;


  titulo: string;
  inicio: string;
  fin: string;
  hora: string;
  facilitador: string;
  email: string;
  max: number;
  descripcion: string;
  activo: boolean;
  completo: boolean;


  evento: any;
  constructor() { 

    this.evento = {};
    this.enviarEvento = new EventEmitter();

  }

  ngOnInit(): void {
  }

  agregarEvento() {
    this.evento = {
      titulo: this.titulo,
      inicio: this.inicio,
      fin: this.fin,
      hora: this.hora,
      facilitador: this.facilitador,
      email: this.email,
      max: this.max,
      descripcion: this.descripcion,
      activo: true,
      completo: false,
      participantes: 0,
    };

    this.enviarEvento.emit(this.evento);
  }
}
