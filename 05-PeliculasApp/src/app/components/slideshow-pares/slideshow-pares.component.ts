import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../intefaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {


  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMde: true,
    spaceBetween: -20
  };

  constructor(private modalCtlr: ModalController) { }

  ngOnInit() {}

  async verDetalle( id: string) {
    const modal = await this.modalCtlr.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

  onClick() {
    this.cargarMas.emit();

  }

}
