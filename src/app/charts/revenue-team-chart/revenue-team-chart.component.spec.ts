import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTeamChartComponent } from './revenue-team-chart.component';

describe('RevenueTeamChartComponent', () => {
  let component: RevenueTeamChartComponent;
  let fixture: ComponentFixture<RevenueTeamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueTeamChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueTeamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
