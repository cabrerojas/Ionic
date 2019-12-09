import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../intefaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {


  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.3,
    freeMde: true,
    spaceBetween: -20
  };

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();

  }

}
