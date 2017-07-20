import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterModule } from '../menu-filter-component/menu-filter.module';
import { SearchLineModule } from '../../components/general-search/search.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ListModule } from '../../components/list/list.module';
import { FilterVacancyModule } from '../../components/filter-components/filter-vacancy/filter-vacancy.module';
import { HistoryListComponent } from './history-list-component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterModule,
    SearchLineModule,
    RouterModule,
    ListModule,
    FilterVacancyModule,
  ],
  declarations: [HistoryListComponent],
  exports: [HistoryListComponent],
})
export class HistoryPageModule{
}
