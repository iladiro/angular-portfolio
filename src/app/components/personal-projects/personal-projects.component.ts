import { Component } from '@angular/core';
import personalprojects from '../../../assets/data/personalprojects.json';

interface PersonalProjectButtons {
  label: string;
  url: string;
}
export interface PersonalProject {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  buttons?: PersonalProjectButtons[]
}

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent {

  list!: PersonalProject[];
  projectDetails!: PersonalProject;

  constructor() {
    this.list = personalprojects;
  }

  openProjectData(event: any) {
    console.log(event);
    this.projectDetails = event;
  }

}
