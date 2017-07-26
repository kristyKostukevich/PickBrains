import { NgModule } from '@angular/core';
import { CandidateDetailComponent } from 'app/candidate-detail/candidate-detail.component';
import { MenuModule } from 'app/components/menu/menu.module';
import { GeneralModule } from 'app/components/general/general.module';
import { ListModule } from 'app/components/list/list.module';
import { CommonModule } from '@angular/common';
import { MdProgressSpinnerModule } from '@angular/material';
// import { FeedbackModule } from 'app/components/feedback/feedback.module';

@NgModule({
  imports: [
    GeneralModule,
    ListModule,
    MenuModule,
    CommonModule,
    MdProgressSpinnerModule,
    // FeedbackModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [],
})
export class CandidateDetailModule {
}
