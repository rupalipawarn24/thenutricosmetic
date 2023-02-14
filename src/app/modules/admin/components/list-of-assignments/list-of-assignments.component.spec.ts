import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAssignmentsComponent } from './list-of-assignments.component';

describe('ListOfAssignmentsComponent', () => {
  let component: ListOfAssignmentsComponent;
  let fixture: ComponentFixture<ListOfAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
