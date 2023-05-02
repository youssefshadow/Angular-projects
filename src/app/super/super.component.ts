import { Component } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css'],
})
export class SuperComponent {
  titre: string = 'Mathieu';
  contenu: string = 'Est un exellent Dev';
}
