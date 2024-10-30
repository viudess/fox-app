import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../services/todo.service';
import { ITodo } from '../../../../models/ITodo';

@Component({
  selector: 'app-tasks-atip',
  templateUrl: './tasks-atip.component.html',
  styleUrl: './tasks-atip.component.css'
})
export class TasksAtipComponent implements OnInit{
  todos: ITodo[] = [];

  constructor(private todoApi:TodoService){

  }
  ngOnInit(): void{
    this.todoApi.getAll().subscribe((dado) => {
      this.todos = dado;
      console.log(dado);
    });
  }

  addTodo(todo : ITodo) {
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
