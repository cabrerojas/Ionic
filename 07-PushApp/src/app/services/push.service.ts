import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    {
      title: 'Titulo del Push',
      body: 'Body del Push',
      date: new Date()
    }
  ];


  constructor(private oneSignal: OneSignal) { }

  configuracionInical() {

      this.oneSignal.startInit('cfb6d82d-db87-4be9-9819-c2bc6949dae5', '707842955501');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('Notificación recibida',  noti );
      });

      this.oneSignal.handleNotificationOpened().subscribe((noti) => {
        // do something when a notification is opened
        console.log('Notificación abierta',  noti );
      });

      this.oneSignal.endInit();

  }
}
