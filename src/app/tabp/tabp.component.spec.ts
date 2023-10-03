import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabpComponent } from './tabp.component';

describe('TabpComponent', () => {
  let component: TabpComponent;
  let fixture: ComponentFixture<TabpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabpComponent]
    });
    fixture = TestBed.createComponent(TabpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
