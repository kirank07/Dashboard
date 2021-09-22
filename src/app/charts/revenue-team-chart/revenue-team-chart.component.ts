import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-revenue-team-chart',
  templateUrl: './revenue-team-chart.component.html',
  styleUrls: ['./revenue-team-chart.component.css']
})
export class RevenueTeamChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [30, 68, 70, 99, 76, 47, 40], label: 'Series C' },
    { data: [28, 78, 50, 19, 66, 27, 50], label: 'Series D' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
