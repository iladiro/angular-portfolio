import { Component } from '@angular/core';
import personalprojects from '../../../assets/data/personalprojects.json';
import { PersonalProject } from 'src/app/interfaces/personal-project.interface';

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
