import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputModel } from '../../interfaces/input-model';

@Component({
  selector: 'input-email',
  templateUrl: 'input-email.component.html',
  styleUrls: ['input-email.component.scss'],
})
export class InputEmailComponent {
  @Input() model: InputModel;
  @Output() modelChange = new EventEmitter<InputModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
