import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyModule } from '../vacancy/vacancy.module';
import { CandidateModule } from '../candidate/candidate.module';
import { HistoryModule } from '../history/history.module';
import { ListComponent } from './list.component';


@NgModule({
  imports: [
    CommonModule,
    VacancyModule,
    CandidateModule,
    HistoryModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule{

}
