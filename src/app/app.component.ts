import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alarmas', url: '/folder/inbox', icon: 'alarm' },
    { title: 'Cronómetro', url: '/folder/inbox', icon: 'timer' },
    { title: 'Cuenta Regresiva', url: '/folder/inbox', icon: 'time' }
  ];
  public labels = ['Iniciar Sesión']
  constructor() {}
}
