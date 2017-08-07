import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputModel } from '../../interfaces/input-model';

@Component({
  selector: 'input-text-mark',
  templateUrl: 'input-text-mark.component.html',
  styleUrls: ['input-text-mark.component.scss'],
})
export class InputTextMarkComponent {
  @Input() model: InputModel;
  @Output() modelChange = new EventEmitter<InputModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
