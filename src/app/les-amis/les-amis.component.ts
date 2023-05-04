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
  unAmiStatus: string = '';
  titleColor: string = '';

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
      this.lesAmisCreationStatus = 'Cliquer pour ajouter un ami 😼!';
      if (this.amiName === 'mathieu') {
        this.unAmiStatus = 'ON';
        this.titleColor = '#F97B22';
      } else {
        this.unAmiStatus = 'OFF';
        this.titleColor = '#41644A';
      }
    }, 3000);
  }

  onCreationAmi() {
    if (this.amiName !== '') {
      this.lesAmisCreationStatus = `Un nouvel ami a été ajouté: ${this.amiName}  😅 `;
      this.amiCreated = true;
      if (this.amiName === 'mathieu') {
        this.unAmiStatus = 'ON';
        this.titleColor = '#F97B22';
      } else {
        this.unAmiStatus = 'OFF';
        this.titleColor = '#41644A';
      }
    }
  }

  onUpdateAmiName(event: any) {
    console.log(event.target.value);
    this.amiName = event.target.value;
  }

  onUpdateTitleColor(event: any) {
    console.log(event.target.value);
    this.titleColor = event.target.value;
  }
}
