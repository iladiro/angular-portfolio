import { Component } from '@angular/core';
import schooleducation from '../../../assets/data/schooleducation.json';

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
