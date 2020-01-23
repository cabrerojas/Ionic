import { Injectable } from '@angular/core';
import { Registro } from '../pages/models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  registros: Registro[] = [];

  constructor(private storage: Storage, private navCtrl: NavController, private iab: InAppBrowser) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.registros = await this.storage.get('registros') || [];

  }

  async guardarRegistro(format: string, text: string) {


    await this.cargarStorage();

    const nuevoRegistro = new Registro(format, text);
    this.registros.unshift(nuevoRegistro);

    console.log(this.registros);
    this.storage.set('registros', this.registros);

    this.abrirRegistro(nuevoRegistro);

  }

  abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/tabs/tab2');

    switch (registro.type) {
      case 'HTTP':
        // abrir navegador
        this.iab.create(registro.text, '_system');

        break;
      case 'GEO':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
        

        break;
      default:
        break;
    }

  }

}
