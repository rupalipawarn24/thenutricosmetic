import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwishComponent } from './iwish.component';

describe('IwishComponent', () => {
  let component: IwishComponent;
  let fixture: ComponentFixture<IwishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IwishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
