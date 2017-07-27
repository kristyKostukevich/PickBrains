import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectMarkModel } from '../../interfaces/select-mark-model';

@Component({
  selector: 'select-mark-component',
  templateUrl: 'select-mark.component.html',
  styleUrls: ['select-mark.component.scss'],
})
export class SelectMarkComponent {
  @Input() model: SelectMarkModel;
  @Output() modelChange = new EventEmitter<SelectMarkModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
