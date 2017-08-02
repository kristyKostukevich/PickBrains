import { NgModule } from '@angular/core';
import { SelectModule } from '../../components/select/select.module';
import { DatePickerModule } from '../../components/date-picker/date-picker.module';
import { InputTextModule } from '../../components/input-text/input-text.module';
import { AssignCandidateComponent } from './assign-candidate.component';
import { HttpService } from '../../http-service/http-service';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SelectModule,
    DatePickerModule,
    InputTextModule,
    MdIconModule,
    MdButtonModule,
    RouterModule,
  ],
  exports: [
    AssignCandidateComponent,
  ],
  declarations: [
    AssignCandidateComponent,
  ],
  providers: [HttpService],
})
export class AssignCandidateModule {

}
