import { Component } from '@angular/core';
import socialchannels from '../../../assets/data/socialchannels.json';

interface Socialchannels {
  name: string;
  icon: string;  
  url: string;
}


@Component({
  selector: 'app-social-channels',
  templateUrl: './social-channels.component.html',
  styleUrls: ['./social-channels.component.scss']
})
export class SocialChannelsComponent {

  list!: Socialchannels[];

  constructor() {
    this.list = socialchannels;
  }

}
