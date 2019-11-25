import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/intefaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) {
    this.cargarFavoritos();
   }



   async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle'  ,
      duration: 2000
    });
    toast.present();
  }


  guardarNoticia(noticia: Article) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
      this.presentToast('Se agregó a favoritos');
    }
  }

  async cargarFavoritos() {

    const favoritos = await this.storage.get('favoritos');

    if (favoritos) {
      this.noticias = favoritos;
    }

  }

  borrarNoticia( noticia: Article ) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);

    this.presentToast('Borrado de favoritos');

  }

}
