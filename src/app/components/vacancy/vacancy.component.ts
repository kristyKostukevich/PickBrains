import { Component, Input, EventEmitter, Output } from '@angular/core';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';

@Component({
  selector: 'vacancy-card',
  templateUrl: 'vacancy.component.html',
  styleUrls: ['vacancy.component.scss'],
})
export class VacancyComponent {
  @Input() item: VacancyCardItem;
  @Output() onChanged = new EventEmitter<any>();

  filterSend(elem,group){
    this.onChanged.emit({id: elem,group : group});
  }
}
