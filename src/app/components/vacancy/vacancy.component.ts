import { Component, Input } from '@angular/core';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';

@Component({
  selector: 'vacancy-card',
  templateUrl: 'vacancy.component.html',
  styleUrls: ['vacancy.component.scss'],
})
export class VacancyComponent {
  @Input() item: VacancyCardItem;
}
