import { Component, Input, OnChanges } from '@angular/core';
// import { CandidateCardItem } from '../../interfaces/candidate-card-item';

@Component({
  selector: 'button-add',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonAddComponent implements OnChanges {
  @Input() inputAdress: string;
  private initialized: boolean = false;


  ngOnChanges() {
    if (this.inputAdress)
      this.initialized = true;
  }

  isVacancyPage(): boolean {
    return this.initialized && this.inputAdress === 'vacancy-page'
  }

  isCandidatePage(): boolean {
    return this.initialized && this.inputAdress === 'person-page'
  }
}
