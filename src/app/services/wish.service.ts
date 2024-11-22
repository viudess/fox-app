import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWish } from '../models/IWish';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private apiURL = environment.api + '/wishs';

  constructor(private http: HttpClient) { }

  getWish() : Observable<IWish[]>{
    return this.http.get<IWish[]>(this.apiURL)
  }

  getWishById(id: string | number): Observable<IWish> {
    return this.http.get<IWish>(`${this.apiURL}/${id}`);
  }

  deleteWishById(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  updateWish(evento : IWish) : Observable<IWish>{
    return this.http.put<IWish>(`${this.apiURL}/${evento.id}`, evento)
  }

  AddWish(evento : IWish) : Observable<IWish>{
    return this.http.post<IWish>(`${this.apiURL}`, evento)
  }

}
