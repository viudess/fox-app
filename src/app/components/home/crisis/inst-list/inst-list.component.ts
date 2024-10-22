import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrl: './inst-list.component.css'
})
export class InstListComponent {
  eventos=[
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
  ]
}
