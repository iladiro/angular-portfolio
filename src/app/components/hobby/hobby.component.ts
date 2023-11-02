import { Component } from '@angular/core';
import hobbies from '../../../assets/data/hobbies.json';
import { Hobby } from 'src/app/interfaces/hobby.interface';

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
