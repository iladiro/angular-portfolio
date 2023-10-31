import { Component } from '@angular/core';
import workexperiences from '../../../assets/data/workexperiences.json';

interface Schooleducation {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  dataTarget: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  list!: Schooleducation[];

  constructor() {
    this.list = workexperiences;
    console.log(this.list);
  }

}
