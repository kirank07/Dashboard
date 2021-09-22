import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-annual-revenue-chart',
  templateUrl: './annual-revenue-chart.component.html',
  styleUrls: ['./annual-revenue-chart.component.css']
})
export class AnnualRevenueChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [55, 39, 70, 41, 26, 55, 70, 70, 51, 36, 25, 70], label: 'Series B' },
    { data: [45, 49, 80, 71, 66, 75, 60, 40, 71, 66, 45, 60], label: 'Series C' },
    { data: [75, 69, 90, 31, 46, 45, 20, 90, 11, 96, 85, 30], label: 'Series D' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
