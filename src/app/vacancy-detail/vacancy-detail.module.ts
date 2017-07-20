import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../components/list/list.module';
import { GeneralModule } from '../components/general/general.module';
import { MenuModule } from '../components/menu/menu.module';
import { VacancyDetailComponent } from './vacancy-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule,
    MenuModule,
    ListModule,
  ],
  declarations: [VacancyDetailComponent],
  exports: [VacancyDetailComponent],
})
export class VacanciesDetailModule {}
