import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'datepicker',
  templateUrl: 'datepicker.component.html',
})
export class DatepickerComponent {
  @Input() placeholder: string;
  @Input() model: string;

  @Output() modelChange = new EventEmitter<string>();

  onModelChange(model: string) {
    this.modelChange.emit(model);
  }
}
