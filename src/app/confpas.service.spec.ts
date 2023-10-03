import { TestBed } from '@angular/core/testing';

import { ConfpasService } from './confpas.service';

describe('ConfpasService', () => {
  let service: ConfpasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfpasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
