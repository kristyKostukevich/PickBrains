import { NgModule } from '@angular/core';
import { CandidateDetailComponent } from 'app/candidate-detail/candidate-detail.component';
import { MenuModule } from 'app/components/menu/menu.module';
import { GeneralModule } from 'app/components/general/general.module';
import { ListModule } from 'app/components/list/list.module';
import { AddCandidateComponent } from './add-candidate.component';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SelectMarkModule } from '../components/select-mark/select-mark.module';
// import { FeedbackModule } from 'app/components/feedback/feedback.module';

@NgModule({
  imports: [
    GeneralModule,
    ListModule,
    MenuModule,
    MdButtonModule,
    MdIconModule,
    RouterModule,
    // FeedbackModule,
    SelectMarkModule,
  ],
  exports: [AddCandidateComponent],
  declarations: [AddCandidateComponent],
  providers: [],
})
export class AddCandidateModule {
}
