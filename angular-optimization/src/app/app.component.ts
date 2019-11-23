import { Component, OnInit } from '@angular/core';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';
import { List } from 'immutable';
const NumRange: [number, number] = [23, 28];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angualr-optimization';
  salesList: List<EmployeeData>;
  rndList: List<EmployeeData>;
  label: string;

  constructor(private generator: ListGenerator) { }

  ngOnInit() {
    this.salesList = List(Sales);
    this.rndList = List(Rnd);
  }

  add(list: List<EmployeeData>, name: string) {

    return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: List<EmployeeData>, node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}
