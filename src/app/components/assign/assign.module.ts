import { NgModule } from '@angular/core';
import { SelectModule } from 'app/components/select/select.module';
import { DatePickerModule } from 'app/components/date-picker/date-picker.module';
import { InputTextModule } from 'app/components/input-text/input-text.module';
import { AssignComponent } from './assign.component';
import { HttpService } from '../../http-service/http-service';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SelectModule,
    DatePickerModule,
    InputTextModule,
    MdIconModule,
    MdButtonModule,
    RouterModule,
  ],
  exports: [
    AssignComponent,
  ],
  declarations: [
    AssignComponent,
  ],
  providers: [HttpService],
})
export class AssignModule {

}
