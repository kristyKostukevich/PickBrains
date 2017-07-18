import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageListComponent } from './person-page-list.component';
import { LineElementsModule } from '../person-page-list-item/person-page-list-item.module';

@NgModule({
  imports: [
    CommonModule,
    LineElementsModule,
  ],
  declarations: [PersonPageListComponent],
  exports: [PersonPageListComponent],
})
export class PersonListModule{
}
