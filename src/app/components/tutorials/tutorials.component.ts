import { Component } from '@angular/core';
import tutorials from '../../../assets/data/tutorials.json';
import { Tutorial } from 'src/app/interfaces/tutorial.interface';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {
  list!: Tutorial[];

  constructor() {
    this.list = tutorials;
  }
}
