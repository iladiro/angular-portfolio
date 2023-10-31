import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.scss']
})
export class TimelineBlockComponent {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() linkText!: string;
  @Input() dataTarget!: string;

}
