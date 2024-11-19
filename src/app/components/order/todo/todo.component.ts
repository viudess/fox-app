import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../../models/ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input() tarefa!:ITodo;
  @Output() onDeleteTask = new EventEmitter<ITodo>();
  @Output() onToggleConcluido = new EventEmitter<ITodo>();

  onDelete(tarefa: ITodo){
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: ITodo){
    this.onToggleConcluido.emit(tarefa);
  }
}
