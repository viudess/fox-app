import { Component } from '@angular/core';
import { TodoApi } from '../../../../services/todo.api';
import { ITodo } from '../../../../models/ITodo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  todos: ITodo[] = [];

  constructor(private todoApi:TodoApi){

  }
  ngOnInit(): void{
    this.todoApi.getAll().subscribe((dado) => {
      this.todos = dado;
      console.log(dado);
    });

  }

  addTodo(todo : ITodo){
    this.todoApi.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo)
    })
  }

  deleteTodo(todo : ITodo){
    this.todoApi.deleteTodo(todo).subscribe(() =>
      (this.todos = this.todos.filter((t) => t.id !== todo.id)));
  }

  toggleConcluido(todo : ITodo){
    todo.check = !todo.check;
    this.todoApi.updateTodo(todo).subscribe();
  }
}
