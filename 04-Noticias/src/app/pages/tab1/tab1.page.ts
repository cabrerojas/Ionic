import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/intefaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  @ViewChild( IonInfiniteScroll , {static: false}) infiniteScroll: IonInfiniteScroll;

  noticias: Article[] = [];

  constructor( private noticiasServices: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.noticiasServices.getTopHeadlines()
                        .subscribe( resp => {
                          // console.log('noticias', resp);

                          if (resp.articles.length === 0) {
                            this.infiniteScroll.disabled = true;
                            event.target.complete();
                            return;
                          }

                          this.noticias.push( ...resp.articles );

                          if (event) {
                            event.target.complete();
                          }

                        });
  }

}
