import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeListModule } from '../app/employee-list/employee-list.module'
import { ListGenerator } from './shared/list-generator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeListModule,
    BrowserAnimationsModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
