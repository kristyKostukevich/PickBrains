import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'app/components/input-text/input-text.module';
import { DatePickerModule } from 'app/components/date-picker/date-picker.module';
import { SelectMarkModule } from 'app/components/select-mark/select-mark.module';
import { InputTextAreaModule } from 'app/components/input-text-area/input-text-area.module';
import { AddFeedbackComponent } from './add-feedback.component';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpService } from 'app/http-service/http-service';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    SelectMarkModule,
    InputTextAreaModule,
    MdIconModule,
    MdButtonModule,
    RouterModule,
  ],
  exports: [AddFeedbackComponent],
  declarations: [AddFeedbackComponent],
  providers: [
    HttpService,
  ],
})
export class AddFeedbackModule {
}
