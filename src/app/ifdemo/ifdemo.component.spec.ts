import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdemoComponent } from './ifdemo.component';

describe('IfdemoComponent', () => {
  let component: IfdemoComponent;
  let fixture: ComponentFixture<IfdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfdemoComponent]
    });
    fixture = TestBed.createComponent(IfdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
