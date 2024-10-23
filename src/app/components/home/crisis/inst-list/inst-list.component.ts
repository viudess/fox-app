import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrl: './inst-list.component.css'
})
export class InstListComponent {
  instrucs=[
    {instrucao: 'Instrução 1'},
    {instrucao: 'Instrução 2'},
  ]
}
