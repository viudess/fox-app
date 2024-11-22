import { Component } from '@angular/core';
import { IEvent } from '../../../../../models/IEvent';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../../services/event.service';

@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrl: './eventinfo.component.css'
})
export class EventinfoComponent {
  evento: IEvent | null = null;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      console.error('ID inválido:', idParam);
      return;
    }

    const id = String(idParam);

    this.eventoService.getEventById(id).subscribe(
      (data) => {
        this.evento = data;
        console.log('Remédio carregado:', this.evento);
      },
      (error) => {
        console.error('Erro ao buscar o remédio:', error);
        this.evento = null;
      }
    );
  }


  deleteEvent(): void {
    const id = this.evento?.id;

    if (!id) {
      console.error('ID do remédio não encontrado para deletar');
      return;
    }

    this.eventoService.deleteEventById(id).subscribe(
      () => {
        console.log('Remédio deletado com sucesso');
        window.history.back();
      },
      (error) => {
        console.error('Erro ao deletar o remédio:', error);
      }
    );
  }
}
