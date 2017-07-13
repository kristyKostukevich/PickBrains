import { Component } from '@angular/core';

@Component({
  selector: 'vacancy-detail-menu',
  templateUrl: 'vacancy-detail-menu.component.html',
  styleUrls: ['vacancy-detail-menu.component.scss'],
})
export class VacancyDetailMenuComponent {
  menuItems: string[] = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
}
