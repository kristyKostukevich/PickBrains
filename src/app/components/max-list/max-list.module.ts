import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyModule } from '../vacancy/vacancy.module';
import { CandidateModule } from '../candidate/candidate.module';
import { FeedbackModule } from 'app/components/feedback/feedback.module';
import { MaxListComponent } from './max-list.component';
import { HttpService } from '../../http-service/http-service';

@NgModule({
  imports: [
    CommonModule,
    VacancyModule,
    CandidateModule,
    FeedbackModule,
  ],
  declarations: [MaxListComponent],
  exports: [MaxListComponent],
  providers: [HttpService],
})
export class MaxListModule{
}
