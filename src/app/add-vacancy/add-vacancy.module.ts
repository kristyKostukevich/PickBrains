import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../components/list/list.module';
import { GeneralModule } from '../components/general/general.module';
import { MenuModule } from '../components/menu/menu.module';
import { RouterModule } from '@angular/router';
import { MdIconModule, MdButtonModule } from '@angular/material';
import { AddVacancyComponent } from './add-vacancy.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule,
    MenuModule,
    ListModule,
    RouterModule,
    MdButtonModule,
    MdIconModule,
    RouterModule,
  ],
  declarations: [AddVacancyComponent],
  exports: [AddVacancyComponent],
})
export class AddVacancyModule {}
