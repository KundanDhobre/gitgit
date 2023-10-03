import { TestBed } from '@angular/core/testing';

import { SearchgridService } from './searchgrid.service';

describe('SearchgridService', () => {
  let service: SearchgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
