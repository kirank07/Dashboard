import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualRevenueChartComponent } from './annual-revenue-chart.component';

describe('AnnualRevenueChartComponent', () => {
  let component: AnnualRevenueChartComponent;
  let fixture: ComponentFixture<AnnualRevenueChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualRevenueChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRevenueChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
