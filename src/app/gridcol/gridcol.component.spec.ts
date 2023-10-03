import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcolComponent } from './gridcol.component';

describe('GridcolComponent', () => {
  let component: GridcolComponent;
  let fixture: ComponentFixture<GridcolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridcolComponent]
    });
    fixture = TestBed.createComponent(GridcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
