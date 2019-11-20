import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/intefaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  noticias: Article[] = [];

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor( private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.categorias[0];

    this.cargarNoticias(this.segment.value);
  }

  segmentChanged(event) {

    this.noticias = [];

    this.cargarNoticias(event.detail.value);

  }

  cargarNoticias( categoria: string) {

    this.noticiasService.getTopHeadLinesCategoria(categoria)
                        .subscribe( resp => {
                          console.log(resp);
                          this.noticias.push(...resp.articles);
                        } );
  }

}
