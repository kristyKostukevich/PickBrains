import { Component, Input } from '@angular/core';
import { HistoryCardItem } from '../../interfaces/history-card-item';

@Component({
  selector: 'history-card',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
})
export class HistoryComponent {
  @Input() item: HistoryCardItem;

  isVacancy() : boolean {
    return this.item.type === 'vacancy';
  }

  isCandidate() : boolean {
    return this.item.type === 'candidate';
  }
}
