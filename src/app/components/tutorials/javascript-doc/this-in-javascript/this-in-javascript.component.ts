import { Component } from '@angular/core';

@Component({
  selector: 'app-this-in-javascript',
  templateUrl: './this-in-javascript.component.html',
  styleUrls: ['./this-in-javascript.component.scss']
})
export class ThisInJavascriptComponent {

  test(value: any) {
    console.log(value)
  }

}
