import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../components/menu/menu.module';
import { AppRoutingModule } from '../../app-routing.module';
import { VacancyDetailComponent } from './vacancy-detail.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    MenuModule,
  ],
  declarations: [VacancyDetailComponent],
  exports: [VacancyDetailComponent],
})
export class VacancyDetailModule {}
