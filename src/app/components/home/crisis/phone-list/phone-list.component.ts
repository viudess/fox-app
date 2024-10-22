import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  eventos=[
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
  ]
}
