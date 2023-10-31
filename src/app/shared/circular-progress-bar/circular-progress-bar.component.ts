import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.scss']
})
export class CircularProgressBarComponent {

  @Input() label!: string;
  @Input() percentage!: number;
  @Input() color: string = "#000";

  ngOnInit() {
    const prova = this.calc();
    console.log(prova)
  }

  calc() {
    return 472 - 472 * this.percentage;
  }

}
