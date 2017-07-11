import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { PersonListComponent } from './person-list.component';
import { FilterModule } from '../filter-bar/filter.module';
import { SearchLineModule } from '../../components/general-search/search.module';
import { LineElementsModule } from '../line-elemets/element.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FilterModule,
    SearchLineModule,
    LineElementsModule],
  declarations: [PersonListComponent],
  exports: [PersonListComponent,MaterialModule],
})
export class PersonListModule{
}
