import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptioComponent } from './optio.component';

describe('OptioComponent', () => {
  let component: OptioComponent;
  let fixture: ComponentFixture<OptioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptioComponent]
    });
    fixture = TestBed.createComponent(OptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
