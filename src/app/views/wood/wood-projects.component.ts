import { Component } from '@angular/core';
import woodprojects from '../../../assets/data/woodprojects.json';
import { WoodProject } from 'src/app/interfaces/wood-project.interface';

@Component({
  selector: 'app-wood-projects',
  templateUrl: './wood-projects.component.html',
  styleUrls: ['./wood-projects.component.scss']
})
export class WoodProjectsComponent {

  list: WoodProject[] = woodprojects;

}
