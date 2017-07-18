import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { FilterModule } from '../person-page-filter/person-page-filter.module';
import { SearchLineModule } from '../../components/general-search/search.module';
import { LineElementsModule } from '../person-page-list-item/person-page-list-item.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonListModule } from '../person-page-list/person-page-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterModule,
    SearchLineModule,
    LineElementsModule,
    PersonListModule,
    RouterModule,
  ],
  declarations: [PersonListComponent],
  exports: [PersonListComponent],
})
export class PersonPageModule{
}
