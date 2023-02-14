import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedAssignmentsListComponent } from './received-assignments-list.component';

describe('ReceivedAssignmentsListComponent', () => {
  let component: ReceivedAssignmentsListComponent;
  let fixture: ComponentFixture<ReceivedAssignmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedAssignmentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedAssignmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
