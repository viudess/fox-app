import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from '../../../../models/ITodo';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrl: './addtasks.component.css'
})
export class AddtasksComponent {

  constructor(private router: Router){}

@Output() onAddTask = new EventEmitter<ITodo>();

clicado: number | null = 0;
task: string = '';
hour: number | null = null;
minuto: number | null = null;
period: string = 'AM';
time: string = '';
date: string = 'Hoje';
check: boolean = false;

everyDay: boolean = false;
createdBy: string = '';


mudarCor(index: number) {
  this.clicado = index;
  switch (index) {
    case 0:
      this.date = 'Hoje';
      break;
    case 1:
      this.date = 'Diário';
      break;
    case 2:
      this.date = 'Semanal';
      break;
  }
}

alternarAmPm() {
  this.period = this.period === 'AM' ? 'PM' : 'AM';
}

atualizarHorario() {
  const horaStr = this.hour !== null ? this.hour.toString().padStart(2, '0') : '00';
  const minutoStr = this.minuto !== null ? this.minuto.toString().padStart(2, '0') : '00';
  this.time = `${horaStr}:${minutoStr} ${this.period}`;
}

onSubmit() {
  this.router.navigateByUrl('/tasks')
  this.atualizarHorario();
  if (!this.task) {
    alert('Adicione a tarefa!');
    return;
  }

  const novaTarefa: ITodo = {
    task: this.task,
    date: this.date,
    time: this.time,
    everyDay: this.everyDay,
    createdBy: this.createdBy,
    assignedTo: [],
    check: this.check,
  };


  this.onAddTask.emit(novaTarefa);

  this.task = '';
  this.date = '';
  this.time = '';
  this.check = false;
}
}
