import { Component, Input } from '@angular/core';
import { CardList } from '../../classes/card-list';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() list: CardList;

  isVacancies() : boolean {
    return this.list.type === 'vacancies';
  }

  isCandidates() : boolean {
    return this.list.type === 'candidates';
  }

  isHistory() : boolean {
    return this.list.type === 'history';
  }
}
