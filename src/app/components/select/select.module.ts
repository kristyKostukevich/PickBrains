import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SelectComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  exports: [SelectComponent],
})
export class SelectModule {
}
