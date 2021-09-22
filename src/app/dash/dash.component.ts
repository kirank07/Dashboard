import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RevenueSummaryService } from '../revenue-summary/revenue-summary.service'; 
import { RevenueSummary } from '../revenue-summary/revenue-summary';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  miniCardData: RevenueSummary[];
  
  constructor(private breakpointObserver: BreakpointObserver,private _revenueSummary: RevenueSummaryService) {}
  
  ngOnInit() {
    this._revenueSummary.getRevenueSummary().subscribe({
      next: summaryData=>{
       console.log(summaryData);
       this.miniCardData = summaryData;
      }
    });
  } 
}
