import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../components/list/list.module';
import { GeneralModule } from '../components/general/general.module';
import { MenuModule } from '../components/menu/menu.module';
import { VacancyDetailComponent } from './vacancy-detail.component';
import { RouterModule } from '@angular/router';
import { MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule,
    MenuModule,
    ListModule,
    RouterModule,
    MdTabsModule,
  ],
  declarations: [VacancyDetailComponent],
  exports: [VacancyDetailComponent],
})
export class VacanciesDetailModule {}
