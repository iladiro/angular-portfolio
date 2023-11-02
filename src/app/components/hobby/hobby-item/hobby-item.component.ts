import { Component, Input } from '@angular/core';
import { Hobby } from '../hobby.component';

@Component({
  selector: 'app-hobby-item',
  templateUrl: './hobby-item.component.html',
  styleUrls: ['./hobby-item.component.scss']
})
export class HobbyItemComponent {

  @Input() item!: Hobby;

}
