import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'
const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
@Pipe({
  name: 'calculate',
  pure: true
})
export class CalculatePipe implements PipeTransform {
  @memo()
  transform(value: any, ...args: any[]): any {
    console.log("calculating: " + value);
    return fibonacci(value);
  }

}
