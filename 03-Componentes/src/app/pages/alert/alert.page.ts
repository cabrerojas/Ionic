import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Boton OK');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Pon tu nombre!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Juanito'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.titulo = this.titulo;
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data) => {
            this.titulo = data.txtNombre;
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }

}
