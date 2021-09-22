import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueListTrafficChartComponent } from './revenue-list-traffic-chart.component';

describe('RevenueListTrafficChartComponent', () => {
  let component: RevenueListTrafficChartComponent;
  let fixture: ComponentFixture<RevenueListTrafficChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueListTrafficChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueListTrafficChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
