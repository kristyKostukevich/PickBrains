import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-textarea',
  templateUrl: 'input-text-area.component.html',
  styleUrls: ['input-text-area.component.scss'],
})
export class InputTextAreaComponent {
  @Input() placeholder: string;
  @Input() model: string;

  @Output() modelChange = new EventEmitter<string>();

  onModelChange(model: string) {
    this.modelChange.emit(model);
  }
}
