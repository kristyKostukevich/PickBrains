import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterModule } from '../menu-filter-component/menu-filter.module';
import { SearchLineModule } from '../../components/general-search/search.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ListModule } from '../../components/list/list.module';
import { VacancyListComponent } from './vacancy-list-component';
import { FilterVacancyModule } from '../../components/filter-components/filter-vacancy/filter-vacancy.module';
import { ButtonAddModule } from '../../components/button-add/button.module';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { Ng2FloatBtnModule } from 'ng2-float-btn';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterModule,
    SearchLineModule,
    RouterModule,
    ListModule,
    FilterVacancyModule,
    ButtonAddModule,
    MdButtonModule,
    MdIconModule,
    Ng2FloatBtnModule,
  ],
  declarations: [VacancyListComponent],
  exports: [VacancyListComponent],
})
export class VacancyPageModule{
}
