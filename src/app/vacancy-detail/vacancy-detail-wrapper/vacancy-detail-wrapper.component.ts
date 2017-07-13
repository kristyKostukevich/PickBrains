import { Component } from '@angular/core';

@Component({
  selector: 'vacancy-detail-wrapper',
  templateUrl: 'vacancy-detail-wrapper.component.html',
  styleUrls: ['vacancy-detail-wrapper.component.scss'],
})
export class VacancyDetailWrapperComponent {
  menuItems: string[] = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
}
