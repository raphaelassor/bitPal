import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Chart } from 'src/models/chart.model';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  chart: Chart;
  @Input() data: Array<any>;
  @Input() chartType: any;
  @Input() title: string;
 
  constructor() { }

  ngOnInit(): void {

    this.chart = {
      type: this.chartType,
      data: this.data,
      title: this.title,
      options:{
        backgroundColor:{fill:'transparent'}
      }
    }
  }

}
