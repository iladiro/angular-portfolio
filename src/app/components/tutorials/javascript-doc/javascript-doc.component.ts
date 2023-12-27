import { Component } from '@angular/core';
import lessons from '../../../../assets/data/javascript-lessons.json';

@Component({
  selector: 'app-javascript-doc',
  templateUrl: './javascript-doc.component.html',
  styleUrls: ['./javascript-doc.component.scss']
})
export class JavascriptDocComponent {

  list!: any[];

  constructor() {
    this.list = lessons;
  }

}
