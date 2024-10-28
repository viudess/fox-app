import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrl: './addtasks.component.css'
})
export class AddtasksComponent {

  constructor(private router: Router){

  }

  @Output() onAddTask = new EventEmitter();

  clicado: number | null = 0;
  tarefa: string = '';
  hora: number | null = null;
  minuto: number | null = null;
  periodo: string = 'AM';
  horario: string = '';
  data: string = 'Hoje';
  concluido: boolean = false;

  mudarCor(index: number) {
    this.clicado = index;
    switch (index) {
      case 0:
        this.data = 'Hoje';
        break;
      case 1:
        this.data = 'Diário';
        break;
      case 2:
        this.data = 'Semanal';
        break;
    }
  }

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }

  atualizarHorario() {
    const horaStr = this.hora !== null ? this.hora.toString().padStart(2, '0') : '00';
    const minutoStr = this.minuto !== null ? this.minuto.toString().padStart(2, '0') : '00';
    this.horario = `${horaStr}:${minutoStr} ${this.periodo}`;
  }

  onSubmit() {
    // let ind: boolean = true;
    // this.router.navigateByUrl( ind ? '/tasks-atip' : '/tasks')
    this.atualizarHorario();
    if (!this.tarefa) {
      alert('Adicione a tarefa!');
      return;
    }

    const novaTarefa = {
      titulo: this.tarefa,
      data: this.data,
      horario: this.horario,
      concluido: this.concluido,
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.data = '';
    this.horario = '';
    this.concluido = false;
  }
}
