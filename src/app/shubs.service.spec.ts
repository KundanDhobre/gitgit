import { TestBed } from '@angular/core/testing';

import { ShubsService } from './shubs.service';

describe('ShubsService', () => {
  let service: ShubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
