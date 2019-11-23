import { Component } from '@angular/core';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';

const NumRange: [number, number] = [23, 28];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualr-optimization';
  salesList: EmployeeData[];
  rndList: EmployeeData[];
  label: string;

  constructor(private generator: ListGenerator) { }

  ngOnInit() {
    this.salesList = Sales;
    this.rndList = Rnd;
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }
}
