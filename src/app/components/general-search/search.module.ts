import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchLineComponent } from './search.component';
import { Validators, FormControl } from '@angular/forms';
import { MaterialModule } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [SearchLineComponent],
  exports: [SearchLineComponent,MaterialModule],
})
export class SearchLineModule{

}
