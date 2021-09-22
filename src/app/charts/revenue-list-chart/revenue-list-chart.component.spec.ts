import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueListChartComponent } from './revenue-list-chart.component';

describe('RevenueListChartComponent', () => {
  let component: RevenueListChartComponent;
  let fixture: ComponentFixture<RevenueListChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueListChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueListChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
