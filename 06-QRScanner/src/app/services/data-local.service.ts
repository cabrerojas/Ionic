import { Injectable } from '@angular/core';
import { Registro } from '../pages/models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  registros: Registro[] = [];
  path: string;

  constructor(private storage: Storage, private navCtrl: NavController, private iab: InAppBrowser, private file: File
            , private emailComposer: EmailComposer, private platform: Platform) {
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

  enviarCorreo() {
    const arrTemp = [];
    const Titulos = 'Tipo, Formato, Creado en, Texto\n';
    arrTemp.push(Titulos);

    this.registros.forEach( registro => {

      const linea = `${ registro.type }, ${ registro.format }, ${ registro.created }, ${ registro.text.replace(',', ' ') }\n`;
      arrTemp.push(linea);
    });
    this.crearArchivoFisico(arrTemp.join(''));
  }


  crearArchivoFisico(texto: string) {

    if (this.platform.is('android')) {
      this.path = this.file.externalDataDirectory;
    } else { // si estamos en ios
      this.path = this.file.dataDirectory;
    }

    this.file.checkFile(this.path, 'registros.csv')
              .then(existe => {
                console.log('Existe Archivo', existe);
                return this.escribirEnArchivo(texto);
              })
              .catch( err => {
                this.file.createFile( this.path, 'registros.csv', false)
                          .then( creado => this.escribirEnArchivo(texto))
                          .catch( err2 => console.log('No se pudo crear el archivo', err2));
              });
  }

  async escribirEnArchivo(texto: string) {
    await this.file.writeExistingFile(this.path, 'registros.csv', texto);

    const archivo = `${this.path}registros.csv`;
    console.log(archivo, 'Archivo Creado');

    const email = {
      to: '',
      attachments: [
        archivo
      ],
      subject: 'Backups de Scans',
      body: 'Aqui tienen sus backups de los scans - <strong>QRScanner</strong>',
      isHtml: true
     };

     // Send a text message using default options
    this.emailComposer.open(email);

  }

}
