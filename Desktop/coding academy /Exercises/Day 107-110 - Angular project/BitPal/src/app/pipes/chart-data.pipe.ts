import { Pipe, PipeTransform } from '@angular/core';
import { DataPoint } from 'src/models/chart.model';

@Pipe({
  name: 'chartData'
})
export class ChartDataPipe implements PipeTransform {

  transform(value: DataPoint[]) {
   return value.map(price => [new Date(price.x * 1000).toLocaleDateString('en-GB', { month: '2-digit', day: '2-digit' }), price.y])
   
  }

}
