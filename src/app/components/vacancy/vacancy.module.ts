import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './vacancy.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VacancyComponent],
  exports: [VacancyComponent],
})
export class VacancyModule {

}
