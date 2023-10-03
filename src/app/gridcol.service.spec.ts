import { TestBed } from '@angular/core/testing';

import { GridcolService } from './gridcol.service';

describe('GridcolService', () => {
  let service: GridcolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridcolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
