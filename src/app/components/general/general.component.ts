import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { GeneralPage } from '../../classes/general-page';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectModel } from '../../interfaces/select-model';

@Component({
  selector: 'general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.scss'],
})
export class GeneralComponent implements OnChanges {
  @Input() model: any;
  @Output() modelChange = new EventEmitter<GeneralPage>();
  private initialized: boolean = false;
  returnSubmit: SelectModel[];

  ngOnChanges() {
    if (this.model)
      this.initialized = true;
    this.returnSubmit = [];
  }

  onModelChange() {
    this.modelChange.emit(this.model);
  }

  updateSecondarySkill(a, b, c) {
    console.log(a, b, c);
  }

  addSecondarySkill() {
    this.model.secondarySkills.push(this.model.nextSecondarySkill);
    this.model.nextSecondarySkill = new SelectModel('', 'Secondary skill', this.model.nextSecondarySkill.options.filter(skill => {
      return skill !== this.model.nextSecondarySkill.value;
    }))
  }

  addOtherSkill() {
    this.model.otherSkills.push(this.model.nextOtherSkill);
    this.model.nextOtherSkill = new SelectModel('', 'Other skill', this.model.nextOtherSkill.options.filter(skill => {
      return skill !== this.model.nextOtherSkill.value;
    }))
  }

  isCandidateAdd(): boolean {
    return this.initialized && this.model.type === 'add-candidate';
  }
  isVacancyAdd(): boolean {
    return this.initialized && this.model.type === 'add-vacancy';
  }

}
