import { TestBed } from '@angular/core/testing';

import { BiduleService } from './bidule.service';

describe('BiduleService', () => {
  let service: BiduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
