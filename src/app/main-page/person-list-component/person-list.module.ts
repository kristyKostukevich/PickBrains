import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { FilterModule } from '../menu-filter-component/menu-filter.module';
import { SearchLineModule } from '../../components/general-search/search.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ListModule } from '../../components/list/list.module';
import { FilterPersonModule } from '../../components/filter-components/filter-person/filter-person.module';
import { GlobalHeaderModule } from '../../components/header/header.module';
import { ButtonAddModule } from '../../components/button-add/button.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterModule,
    SearchLineModule,
    RouterModule,
    ListModule,
    FilterPersonModule,
    GlobalHeaderModule,
    ButtonAddModule,
  ],
  declarations: [PersonListComponent],
  exports: [PersonListComponent],
})
export class PersonPageModule{
}
