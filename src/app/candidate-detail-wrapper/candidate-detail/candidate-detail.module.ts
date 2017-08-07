import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../components/menu/menu.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CandidateDetailComponent } from './candidate-detail.component';
import { AddHrmFeedbackModule } from '../add-hrm-feedback/add-hrm-feedback.module';
import { AddTechFeedbackModule } from '../add-tech-feedback/add-tech-feedback.module';
import { AddInterviewModule } from '../add-interview/add-interview.module';
import { DetailHrmFeedbackModule } from '../detail-hrm-feedback/detail-hrm-feedback.module';
import { DetailTechFeedbackModule } from '../detail-tech-feedback/detail-tech-feedback.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AddHrmFeedbackModule,
    AddTechFeedbackModule,
    DetailHrmFeedbackModule,
    DetailTechFeedbackModule,
    AddInterviewModule,
    MenuModule,
  ],
  exports: [
    CandidateDetailComponent,
  ],
  declarations: [
    CandidateDetailComponent,
  ],
})
export class CandidateDetailModule {
}
