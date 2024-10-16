import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrl: './remedy.component.css'
})
export class RemedyComponent {
  @Input() nomeRemedio!: string;
  @Input() horario!: string;
  @Input() quantidade!: string;
  @Input() vezes!: string;
}
