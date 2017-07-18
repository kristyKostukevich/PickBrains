import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { VacancyDetailMenuComponent } from './vacancy-detail-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
  ],
  declarations: [VacancyDetailMenuComponent],
  exports: [VacancyDetailMenuComponent],
})
export class VacancyDetailMenuModule {
}
