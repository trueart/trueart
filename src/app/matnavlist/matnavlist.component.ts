import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-matnavlist',
  templateUrl: './matnavlist.component.html',
  styleUrls: ['./matnavlist.component.scss']
})
export class MatnavlistComponent {
@Output() snavToggle = new EventEmitter<void>();
  constructor() { }

  onToggle() {
    this.snavToggle.emit();
  }

}
