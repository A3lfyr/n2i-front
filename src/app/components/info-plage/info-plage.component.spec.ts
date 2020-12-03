import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlageComponent } from './info-plage.component';

describe('InfoPlageComponent', () => {
  let component: InfoPlageComponent;
  let fixture: ComponentFixture<InfoPlageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPlageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
