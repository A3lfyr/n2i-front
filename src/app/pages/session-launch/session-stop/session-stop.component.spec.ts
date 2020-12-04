import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStopComponent } from './session-stop.component';

describe('SessionStopComponent', () => {
  let component: SessionStopComponent;
  let fixture: ComponentFixture<SessionStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
