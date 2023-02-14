import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCircularsComponent } from './news-circulars.component';

describe('NewsCircularsComponent', () => {
  let component: NewsCircularsComponent;
  let fixture: ComponentFixture<NewsCircularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCircularsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCircularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
