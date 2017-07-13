import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageListComponent } from './person-page-list.component';
import { MaterialModule } from '@angular/material';
import { LineElementsModule } from '../person-page-list-item/person-page-list-item.module';

@NgModule({
  imports: [CommonModule,MaterialModule,LineElementsModule],
  declarations: [PersonPageListComponent],
  exports: [PersonPageListComponent],
})
export class PersonListModule{
}
