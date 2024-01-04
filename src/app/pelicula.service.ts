import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './model/pelicula.model';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'http://localhost:8083'; // La URL base de tu API

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}/peliculas`);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/peliculas/${id}`);
  }

  createPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(`${this.apiUrl}/peliculas`, pelicula);
  }

  updatePelicula(id: number, pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${this.apiUrl}/peliculas/${id}`, pelicula);
  }

  deletePelicula(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/peliculas/${id}`);
  }
}
