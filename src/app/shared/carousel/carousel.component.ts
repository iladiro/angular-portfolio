import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() slides!: string[];
  @Input() display = false;

  @ViewChild('carousel') carousel!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.carousel.nativeElement)
  }

}
