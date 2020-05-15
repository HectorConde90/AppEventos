import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventosComponent } from '../eventos/eventos.component';

@Component({
  selector: 'app-listaeventos',
  templateUrl: './listaeventos.component.html',
  styleUrls: ['./listaeventos.component.css']
})
export class ListaeventosComponent implements OnInit {

  @Input() listaEventos: any[];
  @Output() eliminarEvento: EventEmitter<string>;
  @Output() modificar = new EventEmitter<string>();
  @Output() participantes = new EventEmitter<number>();

  

  sumaParticipante: number;
  participantesInscritos: any;
  constructor() {

    this.eliminarEvento = new EventEmitter();
    this.sumaParticipante = 0;
    this.participantesInscritos = {};
  

  }

  ngOnInit(): void {

    // Evento de fechas
    

  }


  borrarEvento($event) {
    const id = $event.target.dataset.id;
    this.eliminarEvento.emit(id);
  }

  modificarParticipante($event) {
    
    const id = $event.target.dataset.id;
    this.modificar.emit(id);
    this.participantesInscritos = 0;

  }





  agregarParticipante($event) {

    const id = $event.target.dataset.id;
    const participantes = parseInt($event.target.value);
    const max = parseInt($event.target.dataset.max);
    let participantesActuales = parseInt($event.target.dataset.participantes);

    this.sumaParticipante = participantes + participantesActuales;

    if (this.sumaParticipante > max) {
      alert('El max de participantes es ' + max);
    } else {
      $event.target.dataset.participantes = participantesActuales += participantes;
    }
    if (max == participantesActuales) {
      this.modificarParticipante($event);
    }

    $event.target.placeholder = `Quedan ${max - participantesActuales} plazas.`
    


    this.participantesInscritos = { participantes: participantesActuales, id: id };
    this.participantes.emit(this.participantesInscritos);

    let verificar = max - participantesActuales;
    
    console.log(typeof verificar.toString());
    if(isNaN(verificar)) {
      verificar = 0;
      $event.target.placeholder = `Quedan ${max - verificar} plazas.`;

    }
    $event.target.value = '';
  }
}

