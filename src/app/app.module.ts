import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderModule } from './components/global-header/header.module';
import { TempModule } from './components/test-grid/test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';

import 'hammerjs';
import { PersonListModule } from './person-list/person-list-component/person-list.module';



@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    GlobalHeaderModule,
    TempModule,
    PersonListModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
