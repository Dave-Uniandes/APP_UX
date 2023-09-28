import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmHourPage } from './alarm-hour.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmHourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmHourPageRoutingModule {}
