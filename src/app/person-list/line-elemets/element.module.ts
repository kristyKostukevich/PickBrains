import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { LineElementsComponent } from './element.component';

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [LineElementsComponent],
  exports: [LineElementsComponent,MaterialModule],
})
export class LineElementsModule{
}
