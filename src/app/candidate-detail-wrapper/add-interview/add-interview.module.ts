import { NgModule } from '@angular/core';
import { SelectModule } from '../../components/select/select.module';
import { DatePickerModule } from '../../components/date-picker/date-picker.module';
import { InputTextModule } from '../../components/input-text/input-text.module';
import { AddInterviewComponent } from './add-interview.component';
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
    AddInterviewComponent,
  ],
  declarations: [
    AddInterviewComponent,
  ],
  providers: [HttpService],
})
export class AddInterviewModule {

}
