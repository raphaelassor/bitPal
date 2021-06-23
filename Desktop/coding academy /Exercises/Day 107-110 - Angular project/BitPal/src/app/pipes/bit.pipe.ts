import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bit'
})
export class BitPipe implements PipeTransform {

  transform(value: number , ): string {
    const currStr='฿'+value.toFixed(2)+' BTC'
    
    return currStr;
  }

}
