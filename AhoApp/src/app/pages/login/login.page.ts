import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;


  bookingForm: FormGroup;


  loginUser = {
    correo: 'guillermo@gmail.com',
    password: '123456'
  };

  registerUser: Usuario = {
    correo: 'test',
    password: '123456',
    nombre: 'test'

  };

  constructor(  private usuarioService: UsuarioService,
                private navCtlr: NavController,
                private router: Router,
                public fb: FormBuilder) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    });
  }

  async login(fLogin: NgForm) {

    // if (fLogin.invalid) { return;   }

    // const valido = await  this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    // if (valido) {
    //   // navegar al tabs
    //   this.navCtlr.navigateForward('/main/tabs/tab1', {animated : true} );

    // } else {
    //   // mostrar alerta
    //   console.log('Usuario y/o contraseña no son correctas');
    //   // this.uiServicesService.alertaInformativa('Usuario y/o contraseña no son correctas.');
    // }
  }

  async registro(fRegistro: NgForm) {


    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.usuarioService.createBooking(this.registerUser).then(res => {
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/tabs/tab1']);
      })
        .catch(error => console.log(error));
    }
  }


  //   if (fRegistro.invalid) { return; }

  //   const valido = await this.usuarioService.createBooking(this.registerUser);
  //   if (valido) {
  //     // navegar al tabs
  //     this.navCtlr.navigateForward('/main/tabs/tab1', {animated : true} );

  //   } else {
  //     // mostrar alerta
  //     console.log('Los datos de los campos no son correctas');
  //     // this.uiServicesService.alertaInformativa('Los datos de los campos no son correctas.');
  //   }
  // }



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
