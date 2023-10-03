import { TestBed } from '@angular/core/testing';

import { KundsService } from './kunds.service';

describe('KundsService', () => {
  let service: KundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
