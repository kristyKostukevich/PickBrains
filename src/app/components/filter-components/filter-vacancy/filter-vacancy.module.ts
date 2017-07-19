import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-accordion';
import { MdIconModule } from '@angular/material';
import { FilterVacancyComponent } from './filter-vacancy.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    AccordionModule,
  ],
  declarations: [FilterVacancyComponent],
  exports: [FilterVacancyComponent],
})
export class FilterVacancyModule{
}
