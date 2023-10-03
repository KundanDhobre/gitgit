import { TestBed } from '@angular/core/testing';

import { NewradioService } from './newradio.service';

describe('NewradioService', () => {
  let service: NewradioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewradioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
