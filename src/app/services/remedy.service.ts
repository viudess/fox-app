import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IRemedy } from '../models/IRemedy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemedyService {

  private apiURL = environment.api + '/remedys';

  constructor(private http: HttpClient) { }

  getRemedy() : Observable<IRemedy[]>{
    return this.http.get<IRemedy[]>(this.apiURL)
  }

  getRemedyById(id: string | number): Observable<IRemedy> {
    return this.http.get<IRemedy>(`${this.apiURL}/${id}`);
  }

  deleteRemedyById(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  updateRemedy(remedio : IRemedy) : Observable<IRemedy>{
    return this.http.put<IRemedy>(`${this.apiURL}/${remedio.id}`, remedio)
  }

  AddRemedy(remedio : IRemedy) : Observable<IRemedy>{
    return this.http.post<IRemedy>(`${this.apiURL}`, remedio)
  }
}
