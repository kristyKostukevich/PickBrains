import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorizationComponent } from './authorization.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule } from '@angular/material';
import { HttpService } from '../http-service/http-service';
import { InputTextModule } from '../components/input-text/input-text.module';


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
