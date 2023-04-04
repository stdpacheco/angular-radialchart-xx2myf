import { Component, VERSION ,ViewChild,OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

 @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() {

    
}

  ngOnInit(){
    this.chartOptions = {
      series: [76, 67, 61, 40,80],
      chart: {
        height: 390,
        type: "radialBar",
        toolbar: {
        show: true
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#e60023", "#39539E", "#0077B5", "#1da1f2","#ff0000"],
      labels: ["Pinterest", "Facebook", "LinkedIn", "Twitter","YouTube"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        horizontalAlign:"center",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      }
    };
  }

 
}
