import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLaunchComponent } from './session-launch.component';

describe('SessionLaunchComponent', () => {
  let component: SessionLaunchComponent;
  let fixture: ComponentFixture<SessionLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
