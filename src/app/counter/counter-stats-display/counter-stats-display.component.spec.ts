import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStatsDisplayComponent } from './counter-stats-display.component';

describe('CounterStatsDisplayComponent', () => {
  let component: CounterStatsDisplayComponent;
  let fixture: ComponentFixture<CounterStatsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterStatsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
