import { Component, Input } from '@angular/core';
import { PersonalProject } from 'src/app/interfaces/personal-project.interface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() project!: PersonalProject;

}
