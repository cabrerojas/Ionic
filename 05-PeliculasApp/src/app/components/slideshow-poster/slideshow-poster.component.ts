import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../intefaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {



  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMde: true
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

}
