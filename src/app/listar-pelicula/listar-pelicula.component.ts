import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service'; // Asegúrate de que la ruta es correcta
import { Pelicula } from '../model/pelicula.model';
 // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.scss']
})
export class ListarPeliculaComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(
      (data: Pelicula[]) => {
        this.peliculas = data;
      },
      error => {
        console.error('Hubo un error al recuperar las películas', error);
      }
    );
  }
}
