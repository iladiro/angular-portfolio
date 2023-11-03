import { Component } from '@angular/core';
import { IladiroAngularSlide } from '@iladiro/angular-slider';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  list!: IladiroAngularSlide[];

  constructor() {
    this.list = [
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
    ]
  }

  clickOnSlide(event: any) {
    console.log(event)
  }

}
