import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatListModule, MatCommonModule, MatChipsModule } from '@angular/material';
import { NameInputComponent } from './name-input/name-input.component';
import { ListComponent } from './list/list.component';
import { CalculatePipe } from './calculate.pipe';


@NgModule({
  declarations: [EmployeeListComponent, NameInputComponent, ListComponent, CalculatePipe],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule { }
