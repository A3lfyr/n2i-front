import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricItemComponent } from './historic-item.component';

describe('HistoricItemComponent', () => {
  let component: HistoricItemComponent;
  let fixture: ComponentFixture<HistoricItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
