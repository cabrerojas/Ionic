import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class UiServicesService {

  constructor(private alertController: AlertController,
              public toastController: ToastController ) { }

  async alertaInformativa( message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
