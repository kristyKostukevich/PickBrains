import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VacancyDetailMenuComponent } from './vacancy-detail-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    FlexLayoutModule,
  ],
  declarations: [VacancyDetailMenuComponent],
  exports: [VacancyDetailMenuComponent],
})
export class VacancyDetailMenuModule {}
