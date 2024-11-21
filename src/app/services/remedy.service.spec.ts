import { TestBed } from '@angular/core/testing';

import { RemedyService } from './remedy.service';

describe('RemedyService', () => {
  let service: RemedyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemedyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
