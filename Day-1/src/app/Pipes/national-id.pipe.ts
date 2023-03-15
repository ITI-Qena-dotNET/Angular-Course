import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId'
})
export class NationalIdPipe implements PipeTransform {

  transform(value: string, datePart: string): string {
    switch (datePart) {
      case "YY":
        return value.substring(1, 2);
      case "MM":
        return value.substring(3, 4);
      case "DD":
        return value.substring(5, 6);
      case "FullDate":
        return `${value.substring(5, 6)}-${value.substring(3, 4)}-${value.substring(1, 2)}`
    }

    return value;
  }

}
