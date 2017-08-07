import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchLineComponent } from './search.component';
import { MdIconModule, MdInputModule, MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdInputModule,
    FormsModule,
    MdButtonModule,
  ],
  declarations: [SearchLineComponent],
  exports: [SearchLineComponent,],
})
export class SearchLineModule{

}
