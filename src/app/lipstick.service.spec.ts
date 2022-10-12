import { TestBed } from '@angular/core/testing';
import { LipstickService } from './lipstick.service';

describe('LipstickService', () => {
  let service: LipstickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LipstickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
