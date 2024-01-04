import { Component } from '@angular/core';
import { PeliculaService } from '../pelicula.service'; // Asegúrate de que la ruta es correcta
 // Asegúrate de que la ruta es correcta
import { NgForm } from '@angular/forms';
import { Pelicula } from '../model/pelicula.model';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.scss']
})
export class AgregarPeliculaComponent {
  
  pelicula: Pelicula = {
    id: 0, // Puede que no necesites el ID si se genera en el backend
    titulo: '',
    director: '',
    anio: 0
  };

  constructor(private peliculaService: PeliculaService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.peliculaService.createPelicula(this.pelicula).subscribe(
        (nuevaPelicula: Pelicula) => {
          console.log('Película agregada', nuevaPelicula);
          form.reset(); // Resetear el formulario si todo salió bien
        },
        error => {
          console.error('Error al agregar la película', error);
        }
      );
    }
  }
}
