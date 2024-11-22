import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/IEvent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiURL = environment.api + '/events';

  constructor(private http: HttpClient) { }

  getEvent() : Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.apiURL)
  }

  getEventById(id: string | number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.apiURL}/${id}`);
  }

  deleteEventById(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  updateEvent(evento : IEvent) : Observable<IEvent>{
    return this.http.put<IEvent>(`${this.apiURL}/${evento.id}`, evento)
  }

  AddEvent(evento : IEvent) : Observable<IEvent>{
    return this.http.post<IEvent>(`${this.apiURL}`, evento)
  }

}
