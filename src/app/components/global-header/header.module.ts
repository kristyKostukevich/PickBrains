import { NgModule } from '@angular/core';
import { GlobalHeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent,MaterialModule],
})
export class GlobalHeaderModule{}
