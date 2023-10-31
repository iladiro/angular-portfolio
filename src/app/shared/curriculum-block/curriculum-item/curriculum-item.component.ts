import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-item',
  templateUrl: './curriculum-item.component.html',
  styleUrls: ['./curriculum-item.component.scss']
})
export class CurriculumItemComponent {

  @Input() label!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() github!: string;

}
