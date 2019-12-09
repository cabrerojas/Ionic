import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../intefaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {



  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 2.3,
    freeMde: true
  };


  constructor() { }

  ngOnInit() {}

}
