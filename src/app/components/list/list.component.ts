import { Component, Input, OnChanges } from '@angular/core';
import { CardList } from '../../classes/card-list';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['../max-list/max-list.component.scss'],
})
export class ListComponent implements OnChanges{
  @Input() list: CardList;
  private initialiaze : boolean = false;

  ngOnChanges(){
    if(this.list)
      this.initialiaze = true;
  }

  isVacancies() : boolean {
    return this.initialiaze && this.list.type === 'vacancies';
  }

  isCandidates() : boolean {
    return this.initialiaze && this.list.type === 'candidates';
  }

  isHistory() : boolean {
    return this.initialiaze && this.list.type === 'history';
  }
}

