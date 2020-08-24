import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codecard'
})
export class CardPipe implements PipeTransform {

  transform(value: string): any {
    const segments = value.split(' ');
    return `${segments[0] || ''} ${segments[1] || '' } ${segments[2] || '' } ${segments[3] || '' } - ${segments[4] || '' }`;
  }

}
