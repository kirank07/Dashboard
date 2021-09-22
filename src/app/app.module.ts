import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SentComponent } from './sent/sent.component';
import { ClicksComponent } from './clicks/clicks.component';
import { OpensComponent } from './opens/opens.component';
import { RevenueSummaryService } from './revenue-summary/revenue-summary.service';
import { AnnualRevenueChartComponent } from './charts/annual-revenue-chart/annual-revenue-chart.component';
import { RevenueListTrafficChartComponent } from './charts/revenue-list-traffic-chart/revenue-list-traffic-chart.component';
import { RevenueListChartComponent } from './charts/revenue-list-chart/revenue-list-chart.component';
import { RevenueTeamChartComponent } from './charts/revenue-team-chart/revenue-team-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    MiniCardComponent,
    RevenueComponent,
    SentComponent,
    ClicksComponent,
    OpensComponent,
    AnnualRevenueChartComponent,
    RevenueListTrafficChartComponent,
    RevenueListChartComponent,
    RevenueTeamChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [RevenueSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
