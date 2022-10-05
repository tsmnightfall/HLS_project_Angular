import { TestBed } from '@angular/core/testing';

import { CleanserService } from './cleanser.service';

describe('CleanserService', () => {
  let service: CleanserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
