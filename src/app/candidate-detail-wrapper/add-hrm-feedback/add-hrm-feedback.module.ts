import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'app/components/input-text/input-text.module';
import { DatePickerModule } from 'app/components/date-picker/date-picker.module';
import { InputTextAreaModule } from 'app/components/input-text-area/input-text-area.module';
import { SelectModule } from 'app/components/select/select.module';
import { AddHrmFeedbackComponent } from './add-hrm-feedback.component';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
    MdIconModule,
    MdButtonModule,
    RouterModule,
  ],
  exports: [],
  declarations: [AddHrmFeedbackComponent],
  providers: [],
})
export class AddHrmFeedbackModule {
}
