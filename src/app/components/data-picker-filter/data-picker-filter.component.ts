import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataPickerFilterModel } from '../../interfaces/data-picker-filter';

@Component({
  selector: 'data-picker-filter',
  templateUrl: 'data-picker-filter.component.html',
  styleUrls: ['data-picker-filter.component.scss'],
})

export class DataPickerFilterComponent {
  @Input() info: DataPickerFilterModel;
  @Output() onChanged = new EventEmitter<boolean>();

  updateCheckedOptions(index,event) {
    this.onChanged.emit(event);
  }
}
