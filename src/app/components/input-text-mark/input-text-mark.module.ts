import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextMarkComponent } from './input-text-mark.component';
import { RatingModule } from 'ngx-rating';
import { MdInputModule } from '@angular/material';
@NgModule({
  declarations: [InputTextMarkComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    RatingModule,
  ],
  providers: [],
  exports: [InputTextMarkComponent],
})
export class InputTextMarkModule {
}
