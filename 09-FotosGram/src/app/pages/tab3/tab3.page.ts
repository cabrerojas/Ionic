import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServicesService } from 'src/app/services/ui-services.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};


  constructor(private usuarioService: UsuarioService,
              private uiServicesService: UiServicesService) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
  }

  async actualizar( fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);

    console.log(actualizado);
    if (actualizado) {
      // toast con el mensaje de actualizado
      this.uiServicesService.presentToast('Registro actualizado');


    } else {
      // toast con el error

      this.uiServicesService.presentToast('No se pudo actualizar');
    }
  }

  logout() {

    this.usuarioService.logout();

  }

}
