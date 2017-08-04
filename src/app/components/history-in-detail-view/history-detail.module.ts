import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryDetailComponent } from './history-detail.component';
import { MdPaginatorModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdPaginatorModule,
  ],
  declarations: [HistoryDetailComponent],
  exports: [HistoryDetailComponent],
})
export class HistoryDetailModule {

}
