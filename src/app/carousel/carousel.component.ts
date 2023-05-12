import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() images: string[] = [];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide + this.images.length - 1) % this.images.length;
  }
}
