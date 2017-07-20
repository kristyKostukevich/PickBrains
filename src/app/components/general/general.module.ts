import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { InputTextModule } from '../input-text/input-text.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { InputTextAreaModule } from '../input-text-area/input-text-area.module';
import { SelectModule } from '../select/select.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
  ],
  declarations: [GeneralComponent],
  exports: [GeneralComponent],
})
export class GeneralModule {

}
