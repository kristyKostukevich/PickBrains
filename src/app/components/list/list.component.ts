import { Component, Input, OnChanges } from '@angular/core';
import { CardList } from '../../classes/card-list';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() list: CardList;
  private initialized: boolean = false;

  ngOnChanges() {
    if (this.list)
      this.initialized = true;
  }

  isVacancies(): boolean {
    return this.initialized && this.list.type === 'vacancies';
  }

  isCandidates(): boolean {
    return this.initialized && this.list.type === 'candidates';
  }

  isHistory(): boolean {
    return this.initialized && this.list.type === 'history';
  }
}
