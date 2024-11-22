import { Component, EventEmitter, Output } from '@angular/core';
import { IEvent } from '../../../models/IEvent';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css'
})
export class AddeventComponent {
  @Output() onAddEvent = new EventEmitter<IEvent>();

  evento: string = '';
  hora: number | null = null;
  minuto: number | null = null;
  periodo: string = 'AM';
  horario: string = '';
  dia: number | null = null;
  mes: number | null = null;
  ano: number | null = null;
  data: string = '';
  observacao: string = '';

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }

  atualizarHorario() {
    const horaStr = this.hora !== null ? this.hora.toString().padStart(2, '0') : '00';
    const minutoStr = this.minuto !== null ? this.minuto.toString().padStart(2, '0') : '00';
    this.horario = `${horaStr}:${minutoStr} ${this.periodo}`;
  }

  atualizarData() {
    const diaStr = this.dia !== null ? this.dia.toString().padStart(2, '0') : '00';
    const mesStr = this.mes !== null ? this.mes.toString().padStart(2, '0') : '00';
    const anoStr = this.ano !== null ? this.ano.toString().padStart(4, '0') : '0000';
    this.data = `${diaStr}/${mesStr}/${anoStr}`;
  }

  onSubmit() {
    this.atualizarHorario();
    this.atualizarData();
    if (!this.evento) {
      alert('Adicione o nome do medicamento!');
      return;
    }

    const novoEvento: IEvent = {
      titulo: this.evento,
      horario: this.horario,
      data: this.data,
      observacao: this.observacao
    };

    this.onAddEvent.emit(novoEvento);

    this.evento = '';
    this.horario = '';
    this.data = '';
    this.observacao = '';

  }
}
