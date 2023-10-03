import { TestBed } from '@angular/core/testing';

import { SelectboxService } from './selectbox.service';

describe('SelectboxService', () => {
  let service: SelectboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
