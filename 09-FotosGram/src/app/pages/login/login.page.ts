import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServicesService } from '../../services/ui-services.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;



  loginUser = {
    email: 'guillermo@gmail.com',
    password: '123456'
  };

  registerUser: Usuario = {
    email: 'test',
    password: '123456',
    nombre: 'test',
    avatar: 'av-1.png'

  };

  constructor(  private usuarioService: UsuarioService,
                private navCtlr: NavController,
                private uiServicesService: UiServicesService) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  async login(fLogin: NgForm) {

    if (fLogin.invalid) { return;   }

    const valido = await  this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    if (valido) {
      // navegar al tabs
      this.navCtlr.navigateForward('/main/tabs/tab1', {animated : true} );

    } else {
      // mostrar alerta
      this.uiServicesService.alertaInformativa('Usuario y/o contraseña no son correctas.');
    }
  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) { return; }

    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      // navegar al tabs
      this.navCtlr.navigateForward('/main/tabs/tab1', {animated : true} );

    } else {
      // mostrar alerta
      this.uiServicesService.alertaInformativa('Los datos de los campos no son correctas.');
    }
  }



  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }


  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
