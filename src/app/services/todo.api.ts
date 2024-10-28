import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITodo } from "../models/ITodo";

@Injectable({providedIn: 'root'})
export class TodoApi{
  constructor(
    private client: HttpClient
  ){}
  async getAll() {
    return await this.client.get("http://localhost:3333/api/todo").toPromise()
  }

  async sendTodo(todo: ITodo) {
    return await this.client.post("http://localhost:3333/api/todo", todo).toPromise()
  }

  async updateTodo(todo: ITodo){
    return await this.client.put(`http://localhost:3333/api/todo/${todo.id}`, todo).toPromise()
  }

  async deleteTodo(todo: ITodo) {
    return await this.client.delete(`http://localhost:3333/api/todo/${todo.id}`).toPromise();
  }
}
