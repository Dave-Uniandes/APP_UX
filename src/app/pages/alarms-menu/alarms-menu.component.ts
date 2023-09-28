import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms-menu',
  templateUrl: './alarms-menu.component.html',
  styleUrls: ['./alarms-menu.component.scss'],
})
export class AlarmsMenuComponent  implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/alarms-menu/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/alarms-menu/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/alarms-menu/favorites', icon: 'heart' },
    { title: 'Archived', url: '/alarms-menu/archived', icon: 'archive' },
    { title: 'Trash', url: '/alarms-menu/trash', icon: 'trash' },
    { title: 'Spam', url: '/alarms-menu/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {}

}
