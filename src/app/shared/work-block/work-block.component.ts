import { Component, Input } from '@angular/core';
import { PersonalProject } from 'src/app/components/personal-projects/personal-projects.component';

@Component({
  selector: 'app-work-block',
  templateUrl: './work-block.component.html',
  styleUrls: ['./work-block.component.scss']
})
export class WorkBlockComponent {
  
  @Input() project!: PersonalProject;
}
