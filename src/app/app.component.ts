import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  arrEventos: any[];
  idEventos: number;
  nuevoEvento: any;

  constructor() {

    this.idEventos = 4;
    this.nuevoEvento = {};

    this.arrEventos = [
      {
        id: 1,
        titulo: 'Aprender Angular 9',
        inicio: '22/10/2020',
        fin: '2020-4-24',
        hora: '20:00',
        facilitador: 'Marc',
        email: 'marc@eventos.com',
        max: 20,
        descripcion: 'Clases de angular 9',
        activo: true,
        completo: false,
        participantes: 0,

      },
      {
        id: 2,
        titulo: 'C# desde 0 ',
        inicio: '12/8/2020',
        fin: '2020-12-2',
        hora: '19:30',
        facilitador: 'Sandra',
        email: 'sandra@eventos.com',
        max: 15,
        descripcion: 'Aprende c# de 0 hasta nivel pro.',
        activo: true,
        completo: false,
        participantes: 0,

      },
      {
        id: 3,
        titulo: 'Ciber seguridad ',
        inicio: '10/10/2020',
        fin: '2020-8-15',
        hora: '20:30',
        facilitador: 'Ramón',
        email: 'ramon@eventos.com',
        max: 18,
        descripcion: 'Combiertete en un hacker de la ciberseguridad.',
        activo: true,
        completo: false,
        participantes: 0,

      },
    ];
  }


  ngOnInit(): void {
    let today = new Date();
    // Evento de fechas
    for (let evento of this.arrEventos) {
      let fecha = new Date(evento.fin);
      if (fecha < today) {
        evento.activo = false;
      }
    }

  }




  eliminarEvento($event) {
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event));

    this.arrEventos.splice(index, 1)
  }


  agregarEvento($event) {

    this.nuevoEvento = $event;
    this.nuevoEvento.id = this.idEventos;
    this.arrEventos.push(this.nuevoEvento);
    this.idEventos++;

  }

  modificar($event) {
    // Modifica la fecha
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event));
    // console.log(index);
    this.arrEventos[index].completo = true;
    // console.log(this.arrEventos);
    
  }

  sumarParticipantes($event) {
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event.id));
    this.arrEventos[index].participantes = parseInt($event.participantes);
    // console.log(this.arrEventos);
  }
}