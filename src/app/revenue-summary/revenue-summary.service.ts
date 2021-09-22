import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RevenueSummary } from './revenue-summary';
@Injectable({
  providedIn: 'root'
})
export class RevenueSummaryService {

  getRevenueSummary(): Observable<RevenueSummary[]>{
    return of([
      { title: "Total Revenue", value: "2049465", isIncrease: true, color: "primary", percentValue: "0.5383", icon: "local_atm", isCurrency: true },
      { title: "Total Sent", value: "121305465", isIncrease: false, color: "accent", percentValue: "0.2544", icon: "inbox", isCurrency: false },
      { title: "Total Opens", value: "1250243", isIncrease: true, color: "warn", percentValue: "0.4565", icon: "drafts", isCurrency: false },
      { title: "Total Clicks", value: "23435335", isIncrease: false, color: "primary", percentValue: "0.8361", icon: "open_in_new", isCurrency: false }
    ]);
  }
  constructor() { }
}
