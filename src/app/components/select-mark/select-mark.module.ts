import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { SelectMarkComponent } from './select-mark.component';
import { RatingModule } from 'ngx-rating';


@NgModule({
  declarations: [SelectMarkComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdSelectModule,
    RatingModule,
  ],
  providers: [],
  exports: [SelectMarkComponent],
})
export class SelectMarkModule {
}
