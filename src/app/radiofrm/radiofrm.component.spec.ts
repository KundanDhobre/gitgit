import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofrmComponent } from './radiofrm.component';

describe('RadiofrmComponent', () => {
  let component: RadiofrmComponent;
  let fixture: ComponentFixture<RadiofrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiofrmComponent]
    });
    fixture = TestBed.createComponent(RadiofrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
