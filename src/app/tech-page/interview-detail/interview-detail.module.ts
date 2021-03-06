import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'app/components/input-text/input-text.module';
import { DatePickerModule } from 'app/components/date-picker/date-picker.module';
import { InputTextMarkModule } from 'app/components/input-text-mark/input-text-mark.module';
import { InputTextAreaModule } from 'app/components/input-text-area/input-text-area.module';
import { InterviewDetailComponent } from './interview-detail.component';
import { HttpService } from 'app/http-service/http-service';
import { MdIconModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextMarkModule,
    InputTextAreaModule,
    MdIconModule,
    MdButtonModule,
    RouterModule,
  ],
  exports: [InterviewDetailComponent],
  declarations: [InterviewDetailComponent],
  providers: [HttpService],
})
export class InterviewDetailModule {
}
