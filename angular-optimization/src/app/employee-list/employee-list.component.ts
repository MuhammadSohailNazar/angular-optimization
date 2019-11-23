import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { EmployeeData } from '../shared/list-generator.service';
import { List } from 'immutable';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() data: List<EmployeeData>;
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
}


