import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../../models/ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input() todo!:ITodo;
  @Output() onDeleteTask = new EventEmitter<ITodo>();
  @Output() onToggleConcluido = new EventEmitter<ITodo>();

  onDelete(todo: ITodo){
    this.onDeleteTask.emit(todo);
  }

  onToggle(todo: ITodo){
    this.onToggleConcluido.emit(todo);
  }
}
