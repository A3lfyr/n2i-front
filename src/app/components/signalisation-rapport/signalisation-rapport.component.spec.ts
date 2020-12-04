import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalisationRapportComponent } from './signalisation-rapport.component';

describe('SignalisationRapportComponent', () => {
  let component: SignalisationRapportComponent;
  let fixture: ComponentFixture<SignalisationRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalisationRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalisationRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
