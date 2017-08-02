import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFilterModel } from '../../interfaces/input-filter';

@Component({
  selector: 'input-filter',
  templateUrl: 'input-filter.component.html',
  styleUrls: ['input-filter.component.scss'],
})

export class InputFilterComponent {
  @Input() info: InputFilterModel;
  @Output() onChanged = new EventEmitter<any>();

  updateCheckedOptions(event, field) {
    this.onChanged.emit({event : event,field : field});
  }
}
