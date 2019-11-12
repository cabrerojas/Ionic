import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla']

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {

    // Actualmente esto Ionic lo hace automaticamente 2019-11-12

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }

}
