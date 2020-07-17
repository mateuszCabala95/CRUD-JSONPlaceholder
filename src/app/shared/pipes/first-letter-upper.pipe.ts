import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase();
  }

}
