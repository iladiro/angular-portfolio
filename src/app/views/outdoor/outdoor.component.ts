import { Component } from '@angular/core';
import outdoor from '../../../assets/data/outdoor.json';

export interface Outdoor {
  id: number;
  location: string;
  photos: string[];
}

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.scss']
})
export class OutdoorComponent {

  list: Outdoor[] = outdoor;
  slides!: string[];

  openGallery(event: any) {
    console.log(event);
    this.slides = event.slides;
  }

}
