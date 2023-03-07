import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPricingComponent } from './payment-pricing.component';

describe('PaymentPricingComponent', () => {
  let component: PaymentPricingComponent;
  let fixture: ComponentFixture<PaymentPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
