import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventos=[
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
  ]
}
