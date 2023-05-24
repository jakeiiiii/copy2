import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent {
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  toggleComponents(): void {
    this.clickButton.emit(true);
  }
}
