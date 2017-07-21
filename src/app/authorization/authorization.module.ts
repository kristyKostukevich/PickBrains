import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from '../components/input-text/input-text.module';
import { AuthorizationComponent } from './authorization.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule} from '@angular/material';
import { HttpService } from './authorization-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    FlexLayoutModule,
    MdButtonModule,
  ],
  providers: [HttpService],
  declarations: [AuthorizationComponent],
  exports: [AuthorizationComponent],
})
export class AuthorizationModule {

}
