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
import { MdIconModule, MdButtonModule } from '@angular/material';
import { Ng2FloatBtnModule } from 'ng2-float-btn';


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
    MdButtonModule,
    MdIconModule,
    Ng2FloatBtnModule,
  ],
  declarations: [PersonListComponent],
  exports: [PersonListComponent],
})
export class PersonPageModule{
}
