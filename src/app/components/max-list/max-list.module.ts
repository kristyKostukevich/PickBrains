import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyModule } from '../vacancy/vacancy.module';
import { CandidateModule } from '../candidate/candidate.module';
import { HistoryModule } from '../history/history.module';
import { FeedbackModule } from 'app/components/feedback/feedback.module';
import { MaxListComponent } from './max-list.component';

@NgModule({
  imports: [
    CommonModule,
    VacancyModule,
    CandidateModule,
    HistoryModule,
    FeedbackModule,
  ],
  declarations: [MaxListComponent],
  exports: [MaxListComponent],
})
export class MaxListModule{
}
