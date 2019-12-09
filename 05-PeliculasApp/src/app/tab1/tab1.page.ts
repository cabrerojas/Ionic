import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../intefaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];

  polulares: Pelicula[] = [];



  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature().subscribe(resp => {
      this.peliculasRecientes = resp.results;

    });
    this.getPolulares();

  }

  getPolulares() {
    this.moviesService.getPolulares()
    .subscribe( resp => {

      const arrTemp = [...this.polulares, ...resp.results];

      this.polulares = arrTemp;

    });
  }

  cargarMas() {
    this.getPolulares();
  }

}
