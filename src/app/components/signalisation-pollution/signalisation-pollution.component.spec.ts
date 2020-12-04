import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalisationPollutionComponent } from './signalisation-pollution.component';

describe('SignalisationPollutionComponent', () => {
  let component: SignalisationPollutionComponent;
  let fixture: ComponentFixture<SignalisationPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalisationPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalisationPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
