import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMood } from '../models/IMood';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private apiURL = environment.api + '/moods';

  constructor(private http: HttpClient) { }

  getMood() : Observable<IMood[]>{
    return this.http.get<IMood[]>(this.apiURL)
  }

  getMoodById(id: string | number): Observable<IMood> {
    return this.http.get<IMood>(`${this.apiURL}/${id}`);
  }

  deleteMoodById(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  updateMood(evento : IMood) : Observable<IMood>{
    return this.http.put<IMood>(`${this.apiURL}/${evento.id}`, evento)
  }

  AddMood(evento : IMood) : Observable<IMood>{
    return this.http.post<IMood>(`${this.apiURL}`, evento)
  }
}
