import { Component } from '@angular/core';
import { IladiroAMTButton } from '@iladiro/angular-material-table-library';
import { IladiroAngularSlide } from '@iladiro/angular-slider';
import demoMaterialTable from '../../../assets/data/demo-material-table.json';

interface TableList {
  name: string;
  surname: string;
  gender: string;
  buttons?: IladiroAMTButton[];
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  slides!: IladiroAngularSlide[];
  tableList!: TableList[];

  constructor() {
    this.slides = [
      {
        mediaSrc: '/assets/photos/tropea-1.jpg',
        title: "title",
        link: "prova.html"
      },
      {
        mediaSrc: '/assets/photos/tropea-2.jpg',
        title: "title",
        link: "prova.html"
      },
      {
        mediaSrc: '/assets/photos/tropea-3.jpg',
        title: "title",
        link: "prova.html"
      },
      {
        mediaSrc: '/assets/photos/tropea-4.jpg',
        title: "title",
        link: "prova.html"
      }
    ];

    this.tableList = demoMaterialTable;
  }

  callToActiontable(event: any) {
    console.log(event)
  }

  clickOnSlide(event: any) {
    console.log(event)
  }

}
