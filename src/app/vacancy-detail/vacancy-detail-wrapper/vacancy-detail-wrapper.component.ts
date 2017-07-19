import { Component } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HistoryCardItem } from '../../interfaces/history-card-item';

@Component({
  selector: 'vacancy-detail-wrapper',
  templateUrl: 'vacancy-detail-wrapper.component.html',
  styleUrls: ['vacancy-detail-wrapper.component.scss'],
})
export class VacancyDetailWrapperComponent {
  menuItems: string[] = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
  vacancyName: string = 'Vacancy name';

}
