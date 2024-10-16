import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() nomeEvento!: string;
  @Input() horario!: string;
  @Input() data!: string;
}
