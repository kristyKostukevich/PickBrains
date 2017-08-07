import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputModel } from '../../interfaces/input-model';

@Component({
  selector: 'input-text',
  templateUrl: 'input-text.component.html',
  styleUrls: ['input-text.component.scss'],
})
export class InputTextComponent {
  @Input() model: InputModel;
  @Output() modelChange = new EventEmitter<InputModel>();

  onModelChange() {
    console.log(this.model);
    this.modelChange.emit(this.model);
  }
}
