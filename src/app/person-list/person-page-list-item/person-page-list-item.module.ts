import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { LineElementsComponent } from './person-page-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,MaterialModule,FlexLayoutModule,RouterModule ],
  declarations: [LineElementsComponent],
  exports: [LineElementsComponent],
})
export class LineElementsModule{
}
