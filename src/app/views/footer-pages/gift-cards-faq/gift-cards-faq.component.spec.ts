import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardsFaqComponent } from './gift-cards-faq.component';

describe('GiftCardsFaqComponent', () => {
  let component: GiftCardsFaqComponent;
  let fixture: ComponentFixture<GiftCardsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardsFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
