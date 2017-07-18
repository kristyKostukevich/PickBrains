import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() placeholder: string;
  @Input() model: string;

  @Output() modelChange = new EventEmitter<string>();

  onModelChange(model: string) {
    this.modelChange.emit(model);
  }
}
