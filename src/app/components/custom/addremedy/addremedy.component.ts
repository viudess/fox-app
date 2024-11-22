import { Component, EventEmitter, Output } from '@angular/core';
import { IRemedy } from '../../../models/IRemedy';

@Component({
  selector: 'app-addremedy',
  templateUrl: './addremedy.component.html',
  styleUrl: './addremedy.component.css'
})
export class AddremedyComponent {

  @Output() onAddRemedy = new EventEmitter<IRemedy>();

  remedio: string = '';
  hora: number | null = null;
  minuto: number | null = null;
  periodo: string = 'AM';
  horario: string = '';
  estoque: string = '';
  quantia: string = '';
  observacao: string = '';

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }

  atualizarHorario() {
    const horaStr = this.hora !== null ? this.hora.toString().padStart(2, '0') : '00';
    const minutoStr = this.minuto !== null ? this.minuto.toString().padStart(2, '0') : '00';
    this.horario = `${horaStr}:${minutoStr} ${this.periodo}`;
  }

  onSubmit() {
    this.atualizarHorario();
    if (!this.remedio) {
      alert('Adicione o nome do medicamento!');
      return;
    }

    const novoRemedio: IRemedy = {
      titulo: this.remedio,
      horario: this.horario,
      estoque: this.estoque,
      quantia: this.quantia,
      observacao: this.observacao
    };

    this.onAddRemedy.emit(novoRemedio);

    this.remedio = '';
    this.horario = '';
    this.estoque = '',
    this.quantia = '';
    this.observacao = '';

  }
}

