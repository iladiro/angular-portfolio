import { Component } from '@angular/core';
import skills from '../../../assets/data/skills.json';

interface Skill {
  tecnology: string;
  percent: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  
  list!: Skill[];

  constructor() {
    this.list = skills;
  }

}
