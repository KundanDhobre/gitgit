import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAccoundianComponent } from './dev-accoundian.component';

describe('DevAccoundianComponent', () => {
  let component: DevAccoundianComponent;
  let fixture: ComponentFixture<DevAccoundianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevAccoundianComponent]
    });
    fixture = TestBed.createComponent(DevAccoundianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
