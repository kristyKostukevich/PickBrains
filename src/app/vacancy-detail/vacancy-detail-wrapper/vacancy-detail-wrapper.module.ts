import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { VacancyDetailWrapperComponent } from './vacancy-detail-wrapper.component';
import { VacancyDetailContentModule } from '../vacancy-detail-content/vacancy-detail-content.module';
import { VacancyDetailMenuModule } from '../vacancy-detail-menu/vacancy-detail-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VacancyDetailContentModule,
    VacancyDetailMenuModule,
    FlexLayoutModule,
  ],
  declarations: [VacancyDetailWrapperComponent],
  exports: [VacancyDetailWrapperComponent],
})
export class VacanciesDetailModule {}
