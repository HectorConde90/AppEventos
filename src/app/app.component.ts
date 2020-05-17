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
  display: boolean;




  constructor() {

    this.idEventos = 1;
    this.nuevoEvento = {};
    this.display = true;


    this.arrEventos = [{}];
  }


  ngOnInit(): void {
    
    this.arrEventos = JSON.parse(localStorage.getItem('eventos'));
    
    
    let today = new Date();
    // Evento de fechas
    for (let evento of this.arrEventos) {
      let fecha = new Date(evento.fin);
      if (fecha > today) {
        evento.activo = false;
      }
    }
    this.idEventos = this.arrEventos.length;
    
    console.log(this.arrEventos)
    

  }
 



  eliminarEvento($event) {
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event));

    this.arrEventos.splice(index, 1)
    localStorage.setItem('eventos', JSON.stringify(this.arrEventos));
  }


  agregarEvento($event) {

    this.nuevoEvento = $event;
    this.nuevoEvento.id = this.idEventos;
    this.arrEventos.push(this.nuevoEvento);
    this.idEventos++;

    localStorage.setItem('eventos', JSON.stringify(this.arrEventos));

  }

  modificar($event) {
    // Modifica la fecha
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event));
    // console.log(index);
    this.arrEventos[index].completo = true;
    localStorage.setItem('eventos', JSON.stringify(this.arrEventos));
    // console.log(this.arrEventos);
    
  }

  sumarParticipantes($event) {
    const index = this.arrEventos.findIndex(evento => evento.id === parseInt($event.id));
    this.arrEventos[index].participantes = parseInt($event.participantes);
    // console.log(this.arrEventos);
    localStorage.setItem('eventos', JSON.stringify(this.arrEventos));
  }


  // Funcion para quitar y poner la parte de los imputs
  displayOn() {
    this.display = !this.display;

  }
}