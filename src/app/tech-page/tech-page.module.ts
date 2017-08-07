import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechPageComponent } from './tech-page.component';
import { InterviewModule } from '../candidate-detail-wrapper/interview/interview.module';


@NgModule({
  imports: [
    CommonModule,
    InterviewModule,
  ],
  exports: [
    TechPageComponent,
  ],
  declarations: [
    TechPageComponent,
  ],
})
export class TechPageModule {

}
