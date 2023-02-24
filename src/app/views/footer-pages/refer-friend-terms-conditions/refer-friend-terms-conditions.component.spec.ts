import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFriendTermsConditionsComponent } from './refer-friend-terms-conditions.component';

describe('ReferFriendTermsConditionsComponent', () => {
  let component: ReferFriendTermsConditionsComponent;
  let fixture: ComponentFixture<ReferFriendTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferFriendTermsConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferFriendTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
