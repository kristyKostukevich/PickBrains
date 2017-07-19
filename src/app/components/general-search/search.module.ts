import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchLineComponent } from './search.component';
import { MdIconModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdInputModule,
  ],
  declarations: [SearchLineComponent],
  exports: [SearchLineComponent,],
})
export class SearchLineModule{

}
