import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLaunchedComponent } from './session-launched.component';

describe('SessionLaunchedComponent', () => {
  let component: SessionLaunchedComponent;
  let fixture: ComponentFixture<SessionLaunchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLaunchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLaunchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
