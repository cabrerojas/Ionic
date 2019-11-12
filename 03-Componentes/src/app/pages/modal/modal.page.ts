import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtlr: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtlr.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Guillermo',
        pais: 'Chile'
      }
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();

    console.log('Retorno del modal', data);
  }

}
