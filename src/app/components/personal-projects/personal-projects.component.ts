import { Component } from '@angular/core';
import personalprojects from '../../../assets/data/personalprojects.json';

export interface PersonalProject {
  id: string;
  link: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent {

  list!: PersonalProject[];

  constructor() {
    this.list = personalprojects;
  }

}
