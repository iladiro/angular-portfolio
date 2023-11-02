import { Component, Input } from '@angular/core';
import { Outdoor } from 'src/app/views/outdoor/outdoor.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() outdoor!: Outdoor;

}
