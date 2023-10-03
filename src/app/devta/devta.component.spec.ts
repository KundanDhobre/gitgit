import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtaComponent } from './devta.component';

describe('DevtaComponent', () => {
  let component: DevtaComponent;
  let fixture: ComponentFixture<DevtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevtaComponent]
    });
    fixture = TestBed.createComponent(DevtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
