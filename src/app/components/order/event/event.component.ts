import { Component, Input } from '@angular/core';
import { IEvent } from '../../../models/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() evento!: IEvent;
}
