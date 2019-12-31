import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../intefaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoPorGenero: any[] = [];

  constructor(private DataLocal: DataLocalService,
              private moviesService: MoviesService) {}

  async ngOnInit() {
    this.peliculas = await this.DataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();

    console.log(this.generos);

    this.pelisPorGenero(this.generos,this.peliculas);

  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {


    this.favoritoPorGenero = [];

    generos.forEach(genero => {

      this.favoritoPorGenero.push({
        genero: genero.name,
        pelis: this.pelisPorGenero.filter( peli=> {
          return peli.genres.find(genre => genre.id === genero.id);
        });
      });

    });


    console.log(this.favoritoPorGenero);
 

  }

}
