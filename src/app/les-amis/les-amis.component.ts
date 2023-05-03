import { Component } from '@angular/core';

@Component({
  selector: 'app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css'],
})
export class LesAmisComponent {
  authorizeAmi = false;

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
    }, 3000);
  }
}
