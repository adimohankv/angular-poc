import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceGridComponent } from './ecommerce-grid.component';

describe('EcommerceGridComponent', () => {
  let component: EcommerceGridComponent;
  let fixture: ComponentFixture<EcommerceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
