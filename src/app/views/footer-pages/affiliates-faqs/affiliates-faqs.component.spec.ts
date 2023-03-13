import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesFaqsComponent } from './affiliates-faqs.component';

describe('AffiliatesFaqsComponent', () => {
  let component: AffiliatesFaqsComponent;
  let fixture: ComponentFixture<AffiliatesFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
