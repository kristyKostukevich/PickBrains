import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './menu-filter.component';
import { MdTabsModule } from '@angular/material';
import { AccordionModule } from 'ngx-accordion';
import { FilterPersonModule } from '../../components/filter-components/filter-person/filter-person.module';
import { FilterVacancyModule } from '../../components/filter-components/filter-vacancy/filter-vacancy.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    MdTabsModule,
    FilterPersonModule,
    FilterVacancyModule,
    RouterModule,
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent],
})
export class FilterModule{
}
