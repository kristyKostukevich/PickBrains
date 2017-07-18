import { NgModule } from '@angular/core';
import { MdSliderModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider.component';


@NgModule({
  declarations: [SliderComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdSliderModule,
  ],
  providers: [],
  exports: [SliderComponent],
})
export class SliderModule {
}
