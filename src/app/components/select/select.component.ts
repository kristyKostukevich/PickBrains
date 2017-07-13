import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-component',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss'],
})
export class SelectComponent {
  @Input() placeholder: string;
  @Input() model: string;
  @Input() options: string[];
  @Output() modelChange = new EventEmitter<string>();

  onModelChange(model: string) {
    this.modelChange.emit(model);
  }
}


