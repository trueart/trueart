import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-bs-toolbar',
  templateUrl: './bs-toolbar.component.html',
  styleUrls: ['./bs-toolbar.component.scss']
})
export class BsToolbarComponent  {
  @Output() snavToggle = new EventEmitter<void>();

  constructor() { }

  onToggle() {
    this.snavToggle.emit();
  }
}
