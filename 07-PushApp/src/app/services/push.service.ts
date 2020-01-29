import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  mensajes: OSNotificationPayload[] = [
    // {
    //   title: 'Titulo del Push',
    //   body: 'Body del push',
    //   date: new Date()
    // }
  ];

  userId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();


  constructor(private oneSignal: OneSignal,
              private storage: Storage) {
                this.cargarMensajes();
              }


  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configuracionInial() {

    this.oneSignal.startInit('cfb6d82d-db87-4be9-9819-c2bc6949dae5', '707842955501');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificacion recibida', noti);
    this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe( async (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
      await this.notificacionRecibida(noti.notification);
    });

    // obtener ID
    this.oneSignal.getIds().then(info => {
      this.userId = info.userId;
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida( noti: OSNotification ) {
    await this.cargarMensajes();
    const payload = noti.payload;
    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );
    if (existePush) {
      return;
    } else {
      this.mensajes.unshift(payload);

      this.pushListener.emit(payload);

      await this.guardarPush();
    }
  }

  guardarPush() {
    this.storage.set('mensajes', this.mensajes);

  }

  async cargarMensajes() {
    // borra Stogare
    // this.storage.clear();

    this.mensajes = await this.storage.get('mensajes') || [];

    return this.mensajes;

  }

  async borrarMensajes() {
    await this.storage.clear();
    this.mensajes = [];
    this.guardarPush();

  }


}
