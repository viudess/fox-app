import { Component, OnInit } from '@angular/core';
import { TodoApi } from '../../../services/todo.api';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  constructor(
    private todoApi: TodoApi
  ){}

  ngOnInit(): void {
    this.fetchTodo()
    this.sendTodo()
  }

  async fetchTodo(){
    const data = await this.todoApi.getAll()
    console.log(data)
  }

  async sendTodo(){
    const data = await this.todoApi.sendTodo({
      id: '',
      task: 'string',
      date:  new Date(),
      everyDay: false,
      createdBy: 'IUser',
      assignedTo: [],
      check: false,
    })
    console.log(data)
  }
}
