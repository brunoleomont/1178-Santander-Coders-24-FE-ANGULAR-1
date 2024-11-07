import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gramasTransform',
  standalone: true
})
export class GramasTransformPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value < 1000) {
      return value + ' (g)';
    } else {
      return (value / 1000).toFixed(2) + ' (kg)';
    }
  }
}
