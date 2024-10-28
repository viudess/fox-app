import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITodo } from "../models/ITodo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoApi{

  private apiURL = "http://localhost:3333" + '/api/todo';

  constructor(private client: HttpClient){}

  getAll() : Observable<ITodo[]>{
    return this.client.get<ITodo[]>(this.apiURL)
  }

  deleteTodo(todo : ITodo) : Observable<ITodo>{
    return this.client.delete<ITodo>(`${this.apiURL}/${todo.id}`)
  }

  updateTodo(todo : ITodo) : Observable<ITodo>{
    return this.client.put<ITodo>(`${this.apiURL}/${todo.id}`, todo)
  }

  addTodo(todo : ITodo) : Observable<ITodo>{
    return this.client.post<ITodo>(`${this.apiURL}`, todo)
  }
}
