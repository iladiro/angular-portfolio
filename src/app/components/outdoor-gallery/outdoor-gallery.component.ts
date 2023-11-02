import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Outdoor } from 'src/app/views/outdoor/outdoor.component';

@Component({
  selector: 'app-outdoor-gallery',
  templateUrl: './outdoor-gallery.component.html',
  styleUrls: ['./outdoor-gallery.component.scss']
})
export class OutdoorGalleryComponent {

  @Input() item!: Outdoor;
  @Output() openGalleryEvent = new EventEmitter();

  openGallery(index: number): void {
    this.openGalleryEvent.emit(this.item);
  }

}
