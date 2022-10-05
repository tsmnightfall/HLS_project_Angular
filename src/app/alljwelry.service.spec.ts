import { TestBed } from '@angular/core/testing';

import { AlljwelryService } from './alljwelry.service';

describe('AlljwelryService', () => {
  let service: AlljwelryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlljwelryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
