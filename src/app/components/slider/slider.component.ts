import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
})
export class SliderComponent {
  @Input() placeholder: string;
  @Input() model: number;
  @Input() max: number;
  @Output() modelChange = new EventEmitter<number>();

  onModelChange(model: number) {
    this.modelChange.emit(model);
  }
}


