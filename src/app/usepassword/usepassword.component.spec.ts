import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsepasswordComponent } from './usepassword.component';

describe('UsepasswordComponent', () => {
  let component: UsepasswordComponent;
  let fixture: ComponentFixture<UsepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsepasswordComponent]
    });
    fixture = TestBed.createComponent(UsepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
