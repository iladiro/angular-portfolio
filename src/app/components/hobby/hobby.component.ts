import { Component } from '@angular/core';
import hobbies from '../../../assets/data/hobbies.json';

export interface Hobby {
  name: string;
  image: string;
  url?: string;
  externalUrl?: string;
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
