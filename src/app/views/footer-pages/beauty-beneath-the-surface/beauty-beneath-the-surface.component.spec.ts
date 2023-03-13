import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyBeneathTheSurfaceComponent } from './beauty-beneath-the-surface.component';

describe('BeautyBeneathTheSurfaceComponent', () => {
  let component: BeautyBeneathTheSurfaceComponent;
  let fixture: ComponentFixture<BeautyBeneathTheSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyBeneathTheSurfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyBeneathTheSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
