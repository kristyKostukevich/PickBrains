import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../../components/list/list.module';
import { VacancyDetailContentModule } from '../vacancy-detail-general/vacancy-detail-general.module';
import { VacancyDetailMenuModule } from '../vacancy-detail-menu/vacancy-detail-menu.module';
import { VacancyDetailWrapperComponent } from './vacancy-detail-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    VacancyDetailContentModule,
    VacancyDetailMenuModule,
    ListModule,
  ],
  declarations: [VacancyDetailWrapperComponent],
  exports: [VacancyDetailWrapperComponent],
})
export class VacanciesDetailModule {}
