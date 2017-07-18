import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderModule } from './components/global-header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { AccordionModule } from 'ngx-accordion';
import { PersonPageModule } from './person-list/person-list-component/person-list.module';
import { HttpModule } from '@angular/http';
import { TempModule } from './Temp/temp.module';
import { FilterPersonModule } from './components/filter-components/filter-person/filter-person.module';

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
    PersonPageModule,
    AccordionModule,
    HttpModule,
    TempModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
