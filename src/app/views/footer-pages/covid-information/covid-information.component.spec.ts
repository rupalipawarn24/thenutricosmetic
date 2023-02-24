import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COVIDInformationComponent } from './covid-information.component';

describe('COVIDInformationComponent', () => {
  let component: COVIDInformationComponent;
  let fixture: ComponentFixture<COVIDInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COVIDInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COVIDInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
