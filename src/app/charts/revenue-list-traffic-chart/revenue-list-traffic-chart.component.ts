import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-revenue-list-traffic-chart',
  templateUrl: './revenue-list-traffic-chart.component.html',
  styleUrls: ['./revenue-list-traffic-chart.component.css']
})
export class RevenueListTrafficChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['AOL', 'Yahoo', 'Hotmail','Gmail'];
  public pieChartData: SingleDataSet = [300, 500, 100, 400];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
