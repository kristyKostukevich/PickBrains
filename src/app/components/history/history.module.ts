import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { FormsModule } from '@angular/forms';
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTableModule,
    CdkTableModule,
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
})
export class HistoryModule {

}
