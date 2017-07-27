import { NgModule } from '@angular/core';
import { CandidateDetailComponent } from 'app/candidate-detail/candidate-detail.component';
import { MenuModule } from 'app/components/menu/menu.module';
import { GeneralModule } from 'app/components/general/general.module';
import { ListModule } from 'app/components/list/list.module';
import { RatingModule } from 'ngx-rating';
// import { FeedbackModule } from 'app/components/feedback/feedback.module';

@NgModule({
  imports: [
    GeneralModule,
    ListModule,
    MenuModule,
    // FeedbackModule,
    RatingModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [],
})
export class CandidateDetailModule {
}
