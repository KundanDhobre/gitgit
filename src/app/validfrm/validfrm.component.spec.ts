import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidfrmComponent } from './validfrm.component';

describe('ValidfrmComponent', () => {
  let component: ValidfrmComponent;
  let fixture: ComponentFixture<ValidfrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidfrmComponent]
    });
    fixture = TestBed.createComponent(ValidfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
