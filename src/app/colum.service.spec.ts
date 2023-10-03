import { TestBed } from '@angular/core/testing';

import { ColumService } from './colum.service';

describe('ColumService', () => {
  let service: ColumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
