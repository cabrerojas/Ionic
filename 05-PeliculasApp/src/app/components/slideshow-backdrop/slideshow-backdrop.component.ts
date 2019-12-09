import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../intefaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
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
