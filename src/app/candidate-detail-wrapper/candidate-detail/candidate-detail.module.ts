import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../components/menu/menu.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CandidateDetailComponent } from './candidate-detail.component';
import { AddHrmFeedbackModule } from '../add-hrm-feedback/add-hrm-feedback.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AddHrmFeedbackModule,
    MenuModule,
  ],
  exports: [
    CandidateDetailComponent
  ],
  declarations: [
    CandidateDetailComponent
  ],
})
export class CandidateDetailModule {
}
