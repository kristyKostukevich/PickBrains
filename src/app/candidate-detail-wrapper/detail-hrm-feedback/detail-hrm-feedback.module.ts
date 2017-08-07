import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'app/components/input-text/input-text.module';
import { DatePickerModule } from 'app/components/date-picker/date-picker.module';
import { InputTextAreaModule } from 'app/components/input-text-area/input-text-area.module';
import { SelectModule } from 'app/components/select/select.module';
import { DetailHrmFeedbackComponent } from './detail-hrm-feedback.component';
import { HttpService } from 'app/http-service/http-service';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
  ],
  exports: [],
  declarations: [DetailHrmFeedbackComponent],
  providers: [HttpService],
})
export class DetailHrmFeedbackModule {
}
