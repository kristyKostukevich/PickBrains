import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryDetailComponent } from './history-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [HistoryDetailComponent],
  exports: [HistoryDetailComponent],
})
export class HistoryDetailModule {

}
