import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalisationEtoilesComponent } from './signalisation-etoiles.component';

describe('SignalisationEtoilesComponent', () => {
  let component: SignalisationEtoilesComponent;
  let fixture: ComponentFixture<SignalisationEtoilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalisationEtoilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalisationEtoilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
