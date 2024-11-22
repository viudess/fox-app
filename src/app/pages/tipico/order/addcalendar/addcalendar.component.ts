import { Component } from '@angular/core';
import { IEvent } from '../../../../models/IEvent';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-addcalendar',
  templateUrl: './addcalendar.component.html',
  styleUrl: './addcalendar.component.css'
})
export class AddcalendarComponent {
  eventos: IEvent[] = [];

  constructor(private taskService:EventService){

  }
  ngOnInit(): void{

    this.taskService.getEvent().subscribe((dado) => {
      this.eventos = dado;
      console.log(dado);
    });
  }

  AddEvent(eventos : IEvent){
    this.taskService.AddEvent(eventos).subscribe((evento) => {
      this.eventos.push(evento)
    })
  }
}
