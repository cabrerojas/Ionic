import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../intefaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';

  peliculas: Pelicula[] = [];

  buscando = false;

  ideas: string[] = ['Spiderman' , 'Avenger' , 'La vida es bella', 'El señor de los anillos'];

  constructor(private moviesService: MoviesService, private modalCtlr: ModalController) {}

  buscar(event) {

    const valor: string = event.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;

    this.moviesService.buscarPelicula(valor)
                      .subscribe(resp => {
                        // console.log(resp);
                        this.peliculas = resp['results'];
                        this.buscando = false;
                      });
  }


  async detalle(id: string) {
    const modal = await this.modalCtlr.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
