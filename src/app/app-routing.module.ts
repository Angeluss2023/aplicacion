import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPeliculaComponent } from './listar-pelicula/listar-pelicula.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';



const routes: Routes = [

  { path: 'listar-pelicula', component: ListarPeliculaComponent },
  { path: 'agregar-pelicula', component: AgregarPeliculaComponent},
  { path: '', redirectTo: '/listar-pelicula', pathMatch: 'full' }, // Ruta por defecto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
