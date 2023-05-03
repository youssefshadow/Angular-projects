import { Component } from '@angular/core';

@Component({
  selector: 'app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css'],
})
export class LesAmisComponent {
  authorizeAmi: boolean = false;
  lesAmisCreationStatus: string = 'Patientez';
  amiName: string = '';
  amiCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
      this.lesAmisCreationStatus = 'Cliquer pour ajouter un ami 😼!';
    }, 3000);
  }

  onCreationAmi() {
    if (this.amiName !== '') {
      this.lesAmisCreationStatus = `Un nouvel ami a été ajouté: ${this.amiName}  😅 `;
      this.amiName = '';
      this.amiCreated = true;
    }
  }

  onUpdateAmiName(event: any) {
    console.log(event.target.value);
    this.amiName = event.target.value;
  }
}
