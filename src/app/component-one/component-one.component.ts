import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  toggleComponents(): void {
    this.clickButton.emit(true);
  }
}
