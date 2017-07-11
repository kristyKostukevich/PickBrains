import {NgModule} from "@angular/core";
import {GlobalHeaderComponent} from "./header.component";
import {CommonModule} from "@angular/common";
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent,MaterialModule],
})
export class GlobalHeaderModule{}
