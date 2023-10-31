import { Component } from '@angular/core';
import curriculum from '../../../assets/data/curriculum.json';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {

  educations = curriculum.prj.education_training;
  worksexperience = curriculum.prj.works_experience;
  personalprojects = curriculum.prj.personal_projects;
  skills = curriculum.prj.skills;
}
