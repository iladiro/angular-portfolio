import { Component } from '@angular/core';
import outdoor from '../../../assets/data/outdoor.json';
import { Outdoor } from 'src/app/interfaces/outdoor.interface';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.scss']
})
export class OutdoorComponent {

  list: Outdoor[] = outdoor;
  currentOutdoor!: Outdoor;

  openGallery(event: any) {
    console.log(event);
    this.currentOutdoor = event;
  }

}
