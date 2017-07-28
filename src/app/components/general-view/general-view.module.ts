import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralViewComponent } from './general-view.component';
import { InputTextModule } from '../input-text/input-text.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { InputTextAreaModule } from '../input-text-area/input-text-area.module';
import { SelectModule } from '../select/select.module';
import { SelectMarkModule } from 'app/components/select-mark/select-mark.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
    SelectMarkModule,
  ],
  declarations: [GeneralViewComponent],
  exports: [GeneralViewComponent],
})
export class GeneralViewModule {

}
