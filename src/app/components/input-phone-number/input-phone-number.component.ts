import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputModel } from '../../interfaces/input-model';

@Component({
  selector: 'input-phone-text',
  templateUrl: 'input-phone-number.component.html',
  styleUrls: ['input-phone-number.component.scss'],
})
export class InputPhoneComponent {
  @Input() model: InputModel;
  @Output() modelChange = new EventEmitter<InputModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
