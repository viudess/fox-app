import { Component } from '@angular/core';

@Component({
  selector: 'app-remedylist',
  templateUrl: './remedylist.component.html',
  styleUrl: './remedylist.component.css'
})
export class RemedylistComponent {
  medicacoes = [
    {nomeRemedio: 'Remédio', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
    {nomeRemedio: 'Remédio', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
  ];
}
