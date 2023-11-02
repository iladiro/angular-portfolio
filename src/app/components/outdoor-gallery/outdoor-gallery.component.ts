import { Component, Input } from '@angular/core';
import { Outdoor } from 'src/app/views/outdoor/outdoor.component';

@Component({
  selector: 'app-outdoor-gallery',
  templateUrl: './outdoor-gallery.component.html',
  styleUrls: ['./outdoor-gallery.component.scss']
})
export class OutdoorGalleryComponent {

  @Input() item!: Outdoor;

}
