import { TestBed } from '@angular/core/testing';

import { ReactfrmService } from './reactfrm.service';

describe('ReactfrmService', () => {
  let service: ReactfrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactfrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
