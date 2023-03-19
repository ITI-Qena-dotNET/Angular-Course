import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    return [...value].map((chr, idx) => (idx + 1) % 4 ? chr : chr + ' ').join('');
  }

}
