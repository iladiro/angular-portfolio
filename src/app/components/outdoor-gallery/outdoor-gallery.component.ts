import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Outdoor } from 'src/app/interfaces/outdoor.interface';

@Component({
  selector: 'app-outdoor-gallery',
  templateUrl: './outdoor-gallery.component.html',
  styleUrls: ['./outdoor-gallery.component.scss']
})
export class OutdoorGalleryComponent {

  @Input() outdoor!: Outdoor;
  @Output() openGalleryEvent = new EventEmitter();

  openGallery(index: number): void {
    this.openGalleryEvent.emit(this.outdoor);
  }

}
