import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CandidateComponent],
  exports: [CandidateComponent],
})
export class CandidateModule {
}
