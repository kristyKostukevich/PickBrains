import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: 'input-text.component.html',
  styleUrls: ['input-text.component.scss'],
})
export class InputTextComponent {
  @Input() placeholder: string;
  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();

  onModelChange(model: string) {
    this.modelChange.emit(model);
  }
}
