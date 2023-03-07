import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnExchangesComponent } from './return-exchanges.component';

describe('ReturnExchangesComponent', () => {
  let component: ReturnExchangesComponent;
  let fixture: ComponentFixture<ReturnExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnExchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
