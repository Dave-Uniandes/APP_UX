import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmHourPageRoutingModule } from './alarm-hour-routing.module';

import { AlarmHourPage } from './alarm-hour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmHourPageRoutingModule
  ],
  declarations: [AlarmHourPage]
})
export class AlarmHourPageModule {}
