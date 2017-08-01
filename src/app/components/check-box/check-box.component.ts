import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckBoxModel } from '../../interfaces/check-box';

@Component({
  selector: 'check-box',
  templateUrl: 'check-box.component.html',
  styleUrls: ['check-box.component.scss'],
})

export class CheckBoxComponent {
  @Input() info: CheckBoxModel;
  @Output() onChanged = new EventEmitter<boolean>();

  updateCheckedOptions(index) {
    this.onChanged.emit(index);
  }
}
