import { Component } from '@angular/core';
import hobbies from '../../../assets/data/hobbies.json';

interface Hobby {
  name: string;
  image: string;
}

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {

  list!: Hobby[];

  constructor() {
    this.list = hobbies;
  }

}
