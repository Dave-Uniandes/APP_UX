import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmHourPage } from './alarm-hour.page';

describe('AlarmHourPage', () => {
  let component: AlarmHourPage;
  let fixture: ComponentFixture<AlarmHourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlarmHourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
