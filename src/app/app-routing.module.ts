import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClicksComponent } from './clicks/clicks.component';
import { DashComponent } from './dash/dash.component';
import { OpensComponent } from './opens/opens.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashComponent 
  },
  { 
    path: 'dashboard', 
    component: DashComponent 
  },
  { 
    path: 'revenue', 
    component: RevenueComponent 
  },
  { 
    path: 'sent', 
    component: SentComponent 
  },
  { 
    path: 'clicks', 
    component: ClicksComponent
  },
  {
    path: 'opens',
    component: OpensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
