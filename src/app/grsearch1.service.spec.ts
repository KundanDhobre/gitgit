import { TestBed } from '@angular/core/testing';

import { Grsearch1Service } from './grsearch1.service';

describe('Grsearch1Service', () => {
  let service: Grsearch1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grsearch1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
