import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskgridComponent } from './taskgrid.component';

describe('TaskgridComponent', () => {
  let component: TaskgridComponent;
  let fixture: ComponentFixture<TaskgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskgridComponent]
    });
    fixture = TestBed.createComponent(TaskgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
