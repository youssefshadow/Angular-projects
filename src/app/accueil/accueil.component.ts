import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <app-nav-bar></app-nav-bar>

    <app-carousel
      [images]="[
        './assets/images/slide-1.jpg',
        './assets/images/slide0.jpg',
        './assets/images/slide1.jpg',
        './assets/images/slide2.jpg',
        './assets/images/slide3.jpg',
        './assets/images/slide4.jpg',
        './assets/images/slide5.jpg',
        './assets/images/slide6.jpg',
        './assets/images/slide7.jpg'
      ]"
    ></app-carousel>

    <app-les-amis></app-les-amis>
    <div class="maDiv">
      <app-todolist></app-todolist>
    </div>
  `,
})
export class AccueilComponent {
  name: string = '';
}
