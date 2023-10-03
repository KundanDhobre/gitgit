import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactfrmComponent } from './reactfrm.component';

describe('ReactfrmComponent', () => {
  let component: ReactfrmComponent;
  let fixture: ComponentFixture<ReactfrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactfrmComponent]
    });
    fixture = TestBed.createComponent(ReactfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
