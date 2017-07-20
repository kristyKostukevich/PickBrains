import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePickerModel } from '../../interfaces/date-picker-model';

@Component({
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() model: DatePickerModel;
  @Output() modelChange = new EventEmitter<DatePickerModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
