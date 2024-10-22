import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  @Input() nomeEvento!: string;
  @Input() horario!: string;
  @Input() data!: string;
}
