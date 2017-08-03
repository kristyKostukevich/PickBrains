import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-accordion';
import { MdIconModule } from '@angular/material';
import { FilterVacancyComponent } from './filter-vacancy.component';
import { CheckBoxModule } from '../../check-box/check-box.module';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    AccordionModule,
    CheckBoxModule,
  ],
  declarations: [FilterVacancyComponent],
  exports: [FilterVacancyComponent],
})
export class FilterVacancyModule{
}
