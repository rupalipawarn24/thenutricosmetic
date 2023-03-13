import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPromiseComponent } from './customer-promise.component';

describe('CustomerPromiseComponent', () => {
  let component: CustomerPromiseComponent;
  let fixture: ComponentFixture<CustomerPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
