import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { GeneralPage } from '../../classes/general-page';

@Component({
  selector: 'general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.scss'],
})

export class GeneralComponent implements OnChanges{
  @Input() model: any;
  @Output() modelChange = new EventEmitter<GeneralPage>();
  private initialized: boolean = false;

  ngOnChanges() {
    if (this.model)
      this.initialized = true;
  }

  onModelChange() {
    this.modelChange.emit(this.model);
  }

  isCandidate(): boolean {
    return this.initialized && this.model.type === 'candidate';
  }

  isVacancy(): boolean {
    return this.initialized && this.model.type === 'vacancy';
  }

  isFeedbackFromHr(): boolean {
    return this.initialized && this.model.type === 'feedbackFromHr';
  }

  isFeedbackFromTech(): boolean {
    return this.initialized && this.model.type === 'feedbackFromTech';
  }
}
