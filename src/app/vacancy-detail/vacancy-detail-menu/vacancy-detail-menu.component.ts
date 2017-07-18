import { Component, Input } from '@angular/core';

@Component({
  selector: 'vacancy-detail-menu',
  templateUrl: 'vacancy-detail-menu.component.html',
  styleUrls: ['vacancy-detail-menu.component.scss'],
})
export class VacancyDetailMenuComponent {
  @Input() menuItems: string[];
  @Input() vacancyName: string;
}
