import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MdSelectModule } from '@angular/material';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MdSelectModule,
  ],
  providers: [],
  exports: [SelectComponent],
})
export class SelectModule {
}
