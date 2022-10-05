import { TestBed } from '@angular/core/testing';

import { AllcosmeticService } from './allcosmetic.service';

describe('AllcosmeticService', () => {
  let service: AllcosmeticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcosmeticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
