import { Component } from '@angular/core';

@Component({
  selector: 'app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css'],
})
export class LesAmisComponent {
  authorizeAmi: boolean = false;
  lesAmisCreationStatus: string = 'Cliquer pour ajouter un ami';

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
    }, 3000);
  }

  onCreationAmi() {
    this.lesAmisCreationStatus = 'Un nouvel ami a été ajouté !';
  }
}
