import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlarmsListComponent } from './pages/alarms-list/alarms-list.component';
import { AlarmsMenuComponent } from './pages/alarms-menu/alarms-menu.component';

@NgModule({
  declarations: [AppComponent, AlarmsListComponent, AlarmsMenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
