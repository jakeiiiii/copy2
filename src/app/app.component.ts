import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  showComponentOne = true;
  showComponentTwo = false;

  toggleComponents() {
    this.showComponentOne = !this.showComponentOne;
    this.showComponentTwo = !this.showComponentTwo;
  }
}
