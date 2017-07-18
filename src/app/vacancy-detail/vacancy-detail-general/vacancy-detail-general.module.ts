import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyDetailContentComponent } from './vacancy-detail-general.component';
import { InputTextModule } from '../../components/input-text/input-text.module';
import { DatePickerModule } from '../../components/date-picker/date-picker.module';
import { InputTextAreaModule } from '../../components/input-text-area/input-text-area.module';
import { SelectModule } from '../../components/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DatePickerModule,
    InputTextAreaModule,
    SelectModule,
  ],
  declarations: [VacancyDetailContentComponent],
  exports: [VacancyDetailContentComponent],
})
export class VacancyDetailContentModule {

}
