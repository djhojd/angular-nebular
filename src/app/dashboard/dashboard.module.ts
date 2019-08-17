import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NbLayoutModule, NbSidebarModule, NbButtonModule],
})
export class DashboardModule {}
