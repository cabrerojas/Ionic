import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
    console.log(this.usuarios);
  }


  favorite(user) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }
  share(user) {
    console.log('share', user);
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    console.log('borrar', user);
    this.lista.closeSlidingItems();
  }

}
