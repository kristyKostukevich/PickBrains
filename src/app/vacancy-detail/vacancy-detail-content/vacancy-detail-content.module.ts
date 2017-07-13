import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VacancyDetailContentComponent } from './vacancy-detail-content.component';
import { InputTextModule } from '../../componnents/input-text/input-text.module';
import { DatepickerModule } from '../../componnents/datepicker/datepicker.module';
import { InputTextAreaModule } from '../../componnents/input-text-area/input-text-area.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    InputTextModule,
    DatepickerModule,
    InputTextAreaModule,
  ],
  declarations: [VacancyDetailContentComponent],
  exports: [VacancyDetailContentComponent],
})
export class VacancyDetailContentModule {}
