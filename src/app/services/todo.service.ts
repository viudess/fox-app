import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../models/ITodo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiURL = environment.api + '/tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.apiURL)
  }

  deleteTask(tarefa : ITodo) : Observable<ITodo>{
    return this.http.delete<ITodo>(`${this.apiURL}/${tarefa.id}`)
  }

  updateTask(tarefa : ITodo) : Observable<ITodo>{
    return this.http.put<ITodo>(`${this.apiURL}/${tarefa.id}`, tarefa)
  }

  AddTask(tarefa : ITodo) : Observable<ITodo>{
    return this.http.post<ITodo>(`${this.apiURL}`, tarefa)
  }
}
