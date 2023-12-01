import { TestBed } from '@angular/core/testing';

import { DiscoucouService } from './discoucou.service';

describe('DiscoucouService', () => {
  let service: DiscoucouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoucouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
