import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/shared/list-generator.service';
import { List } from 'immutable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() data: List<EmployeeData>;

  @Output() remove = new EventEmitter<EmployeeData>();

}


