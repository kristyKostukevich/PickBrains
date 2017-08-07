import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralViewComponent } from './general-view.component';
import { InputTextModule } from '../input-text/input-text.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { InputTextAreaModule } from '../input-text-area/input-text-area.module';
import { SelectModule } from '../select/select.module';
import { SelectMarkModule } from 'app/components/select-mark/select-mark.module';
import { HttpService } from '../../http-service/http-service';
import { InputPhoneModule } from '../input-phone-number/input-phone-number.module';
import { InputEmailModule } from '../input-email/input-email.module';
import { MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
    SelectMarkModule,
    InputPhoneModule,
    InputEmailModule,
    MdButtonModule,
    MdIconModule,
  ],
  declarations: [GeneralViewComponent],
  exports: [GeneralViewComponent],
  providers: [HttpService],
})
export class GeneralViewModule {

}
