import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-block',
  templateUrl: './curriculum-block.component.html',
  styleUrls: ['./curriculum-block.component.scss']
})
export class CurriculumBlockComponent {
  @Input() icon!: string;
  @Input() sectionTitle!: string;
  @Input() list!: any[];
}
