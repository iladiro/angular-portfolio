import { Component } from '@angular/core';
import workexperiences from '../../../assets/data/workexperiences.json';
import { WorkExperience } from 'src/app/interfaces/work-experience.interface';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  list!: WorkExperience[];

  constructor() {
    this.list = workexperiences;
  }

}
