import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './interview-list.component';
import { InterviewModule } from '../interview/interview.module';

@NgModule({
  imports: [
    CommonModule,
    InterviewModule,
  ],
  exports: [
    InterviewListComponent,
  ],
  declarations: [
    InterviewListComponent,
  ],
})
export class InterviewListModule {

}
