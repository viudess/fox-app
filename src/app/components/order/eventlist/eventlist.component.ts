import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { IEvent } from '../../../models/IEvent';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventos: IEvent[] = [];

  constructor(private taskService:EventService){

  }
  ngOnInit(): void{

    this.taskService.getEvent().subscribe((dado) => {
      this.eventos = dado;
      console.log(dado);
    });
  }
}
