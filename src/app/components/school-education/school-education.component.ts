import { Component } from '@angular/core';
import schooleducation from '../../../assets/data/schooleducation.json';
import { Schooleducation } from 'src/app/interfaces/school-education.interface';

@Component({
  selector: 'app-school-education',
  templateUrl: './school-education.component.html',
  styleUrls: ['./school-education.component.scss']
})
export class SchoolEducationComponent {

  list!: Schooleducation[];

  constructor() {
    this.list = schooleducation;
  }

}
