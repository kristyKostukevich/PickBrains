import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputModel} from '../../interfaces/input-model';

@Component({
  selector: 'input-textarea',
  templateUrl: 'input-text-area.component.html',
  styleUrls: ['input-text-area.component.scss'],
})
export class InputTextAreaComponent {
  @Input() model: InputModel;
  @Output() modelChange = new EventEmitter<InputModel>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
